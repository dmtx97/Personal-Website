import { makeStyles, useTheme} from '@material-ui/styles';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {useState, Fragment} from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import axios from 'axios';
import API from '../api/express_requests.js';

const styles ={
  textLabel:{
    fontWeight:300, 
    color: "#333"
  },
}

const initialState = {
	firstName : "",
	lastName : "",
	email : "",
	message : "",
  };

export default function Contact(props){
    const api = new API();
    const [{firstName, lastName, email, message}, setState] = useState(initialState);

    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const sendEmail = ()=>{

      let data = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      })

      api.sendEmail(data);
      setState(initialState);
    }

    return(
      <div>
        <Typography>
          <Box fontWeight="fontWeightBold">
            Contact Me
          </Box>
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={firstName}
                variant="filled"

                InputLabelProps ={{
                  style: {fontWeight:600, color: "grey"}
                }}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                variant="filled"
                onChange={onChange}
                
                InputLabelProps ={{
                  style: {fontWeight:600, color: "grey"}
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
              fullWidth 
              id="email"
              name="email" 
              label="Email"
              value={email}
              variant="filled"
              onChange={onChange}
              
              InputLabelProps ={{
                style: {fontWeight:600, color: "grey"}
              }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
            label="Multiline"
            multiline
            rows={4}
            fullWidth
            id="message"
            name="message"
            label="Message"
            variant="filled"
            value={message}
            onChange={onChange}
            
            InputLabelProps ={{
              style: {fontWeight:600, color: "grey"}
            }}
          />

            <Grid item xs={12}>
              <Button fullWidth variant="contained" style={{marginTop: "8px", fontWeight: 600, color: "grey"}} onClick={sendEmail}>Send</Button>
            </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    );
}