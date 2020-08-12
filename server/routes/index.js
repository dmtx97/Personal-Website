const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer")
const config = require('../../config.json')
const db = require('../db');
const fs = require('fs');
const bcrypt = require('bcrypt')
const test = require('../../test.json')


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
router.post('/post-blog-entry', (req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let body = req.body.body;
    db.none('INSERT INTO blogs (title, description, date_recorded, body) VALUES ($1, $2, CURRENT_DATE, $3);', [title, description, body])
    .then(res.sendStatus(200))
    .catch(error=>{
        console.log(error)
    })
});

router.delete('/delete-blog-entry/:blog_id', (req, res)=>{
    let blog_id = req.params.blog_id
    db.none('DELETE FROM blogs WHERE blog_id = $1;', [blog_id])
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
    // get hashed password from database
    // right now testing through a generated hashed password in a json file
    bcrypt.compare(req.body.password, test.hashedPw, function(err, result) {
        if (result == true){
            res.send("passwords match!")
        }
        else
            res.send('incorrect password')
    });
})

module.exports = router;
