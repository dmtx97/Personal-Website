import axios from 'axios';

export default class API{

    sendEmail(data){
        axios({
            method: 'post',
            url: '/api/send-email',
            data: data
          }).then(function(response){
            console.log(response);
          });
    }
}