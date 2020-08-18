const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer")
const config = require('../../config.json')
const db = require('../db');
const fs = require('fs');
const bcrypt = require('bcrypt')
const test = require('../../test.json')
const jwt = require('jsonwebtoken');
const Cookie = require('js-cookie');

/* NODEMAILER */
router.post('/contact-form', (req, res)=>{
    const email = req.body.email;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.nodemailerUser,
            pass: config.nodemailerPassword 
        }
    })

    let mailOptions = {
        // from: req.body.email,
        to: 'dmtx97@gmail.com',
        subject: `[NOTICE] Contact Via Website | ${req.body.firstName} ${req.body.lastName}`,
        text: `${req.body.message}\n\nContact: ${req.body.email}`
    }

    console.log(req.body);
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err){
            console.log('Error Occurred: ', err);
        } else{
            console.log('Email Sent');
        }
    }); 
});

/* BLOG */ 
router.post('/post-blog-entry', authenticateToken, (req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let body = req.body.body;
    db.none('INSERT INTO blogs (title, description, date_recorded, body) VALUES ($1, $2, CURRENT_DATE, $3);', [title, description, body])
    .then(res.sendStatus(200))
    .catch(error=>{
        console.log(error)
    })
});

router.delete('/delete-blog-entry/:blog_id', authenticateToken, (req, res)=>{
    let blog_id = req.params.blog_id
    db.none('DELETE FROM blogs WHERE blog_id = $1;', [blog_id])
    .then(res.sendStatus(200))
    .catch(error=>{
        console.log(error);
    })
})

router.post('/update-blog-entry/:blog_id', authenticateToken, (req, res)=>{
    let blog_id = req.params.blog_id;
    let title = req.body.title;
    let description = req.body.description;
    let body = req.body.body;

    db.none('UPDATE blogs SET title = $1, description = $2, body = $3 WHERE blog_id = $4;', [title, description, body, blog_id])
    .then(res.sendStatus(200))
    .catch(error=>{
        console.log(error);
    })
})

router.get('/get-blogs', (req, res)=>{
    db.any('SELECT * FROM blogs ORDER BY date_recorded ASC;')
    .then(rows=>{
        // let data = JSON.stringify(rows);
        // fs.writeFileSync('student-2.json', data);
        res.send(rows);
    })
    .catch(error=>{
        res.send(error)
    })
})

router.get('/get-blog/:blog_id', (req, res)=>{
    let blog_id = req.params.blog_id;

    db.one('SELECT * FROM blogs WHERE blog_id = $1 ORDER BY date_recorded ASC;', [blog_id])
    .then(row=>{
        res.send(row);
    })
    .catch(error=>{
        res.send(error);
    })
})

router.post('/verifyuser', (req, res)=>{

    // const person = await db.one('SELECT * from admin WHERE Email = $1',[req.body.emai]);
                                      //replace with person.passwordHash when using database
    bcrypt.compare(req.body.password, test.hashedPw, function(err, result) {
        if (result == true){
            const claims = { user: "Daniel Mendez", email: req.body.email}
            const verified = jwt.sign(claims, config.jwtSecret, { expiresIn: '1h'});
            res.json({authToken: verified})
        }
        else
            res.status(215).json({message: "incorrect password"});
            // res.send('incorrect password')
    });
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401)
    
    jwt.verify(token, config.jwtSecret, (err, user)=>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router;
