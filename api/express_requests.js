import axios from 'axios';

export default class API{

    sendEmail(data){
        axios({
            method: 'post',
            url: '/api/contact-form',
            data: data
          }).then(function(response){
            console.log(response);
          });
    }
}