const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/movies", (req, res) => {
    res.end("We made it! And it's great");
});

router.post('/send-email', (req, res)=>{
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "",
            pass: "" 
        }
    })

    let mailOptions = {
        from: req.body.email,
        to: 'dmtx97@gmail.com',
        subject: `[NOTICE] Contact Via Website By ${req.body.firstName} ${req.body.lastName}`,
        text: req.body.message
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err){
            console.log('Error Occurred: ', err);
        } else{
            console.log('Email Sent');
        }
    }); 
});


module.exports = router;
