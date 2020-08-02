const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer")
const config = require('../../config.json')
const db = require('../db');


/* NODEMAILER */
router.post('/contact-form', (req, res)=>{
    const email = req.body.email;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.user,
            pass: config.pass 
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
    db.none('INSERT INTO "Blogs"(title, description, date_recorded, body) VALUES ($1, $2, CURRENT_DATE, $3);', [title, description, body])
    .then(res.sendStatus(200))
    .catch(error=>{
        console.log(error)
    })
});

router.post('/delete-blog-entry', (req, res)=>{
    let blog_id = req.body.blog_id;
    db.one('DELETE FROM "Blogs" WHERE blog_id = $1;'[blog_id])
    .then(res.sendStatus(200))
    .catch(error=>{
        console.log(error);
    })
})



router.get('/get-blogs', (req, res)=>{
    db.any('SELECT * FROM "Blogs";')
    .then(rows=>{
        // console.log(rows)
        res.send(rows);
    })
    .catch(error=>{
        res.send(error)
    })
})

router.get('/blog-test/:blog_id', (req, res)=>{
   res.send(req.params.blog_id);
})

router.get('/get-blog/:blog_id', (req, res)=>{
    let blog_id = req.params.blog_id;

    db.one('SELECT * FROM "Blogs" WHERE blog_id = $1;', [blog_id])
    .then(row=>{
        res.send(row);
    })
    .catch(error=>{
        res.send(error);
    })
})

module.exports = router;
