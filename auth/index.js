/* TEST*/
const bcrypt = require('bcrypt');
const fs = require('fs');
const user = require('../test.json');
const saltRounds = 10;

function generatePassword(yourPassword){
    let password = {}
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(yourPassword, salt, (err, hash) => {
            password['hashedPw'] = hash;
            let data = JSON.stringify(password);
            fs.writeFileSync('test.json', data);
            console.log("file written")
        });
    });
}

function comparePassword(pw, hash){
    bcrypt.compare(pw , hash, function(err, res) {
    
        if (res == true){
            console.log("passwords match!")
        }
        else
            console.log("wrong password");
    });
}


