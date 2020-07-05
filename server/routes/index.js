const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

var config = require('../../config.json');

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


module.exports = router;
