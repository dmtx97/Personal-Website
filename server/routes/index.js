const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer")
const config = require('../../config.json')
const db = require('../db');
const fs = require('fs');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Cookie = require('js-cookie');
const sgMail = require('@sendgrid/mail');

/* NODEMAILER */
router.post('/contact-form', (req, res)=>{
    
    sgMail.setApiKey(config.sendGridApi);
    const msg = {
        to: 'dmtx97@gmail.com',
        from: 'daniel.mendez.site@gmail.com',
        subject: `[NOTICE] Contact Via Website | ${req.body.firstName} ${req.body.lastName}`,
        text: `${req.body.message}\n\nContact: ${req.body.email}` 
    };
    sgMail.send(msg);
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
    db.any('SELECT * FROM blogs ORDER BY date_recorded DESC;')
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

    let email = req.body.email;
    let password = req.body.password;

    db.one('SELECT * from daniel WHERE email= $1;', [email])
    .then(row=>{
        
        bcrypt.compare(password, row.passwordhash).then(isMatch=>{

            if(isMatch){
                const claims = { user: "Daniel Mendez", email: email}
                const verified = jwt.sign(claims, config.jwtSecret, { expiresIn: '1h'});
                res.json({authToken: verified})
            }

            else
                res.status(215).json({message: "Incorrect Password/Email"});
            });
        })
        .catch(error=>{
            console.log(error);
            res.status(215).json({message: "Incorrect Password/Email"});
    })
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
