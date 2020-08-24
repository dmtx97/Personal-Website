import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { isValidEmail } from '../utils';
import { CssTextField } from '../style/MaterialStyleVariant';
import API from '../api/';

export default function Contact(){
    const initialState = {
      firstName : "",
      lastName : "",
      email : "",
      message : "",
    };

    const api = new API();
    const [{firstName, lastName, email, message}, setState] = useState(initialState);
    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
        isFormValid();
    };

    const isFormValid = () =>{

      let data = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        message: message
      }

      if(Object.values(data).includes('')){
        return true;
      }

      return false;
    }

    const inputValidation = (e)=>{

      e.preventDefault();

      let data = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        message: message
      }

      if(isValidEmail(data.email)){
        api.sendEmail(data);
        setState(initialState);
      }

      console.log(data);
    }

    return(
      <div>
        <h4 style={{fontWeight: "500", fontSize:"1rem", marginTop: "0px", marginBottom:"10px" }} >
          Contact Me
        </h4>
        <form onSubmit={inputValidation} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} style={{paddingBottom:"0px"}}>
                <CssTextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  variant="filled"
                  // helperText="First Name Empty!"
                  inputProps={{style: {fontWeight: 300}}}
                  InputLabelProps ={{style: {fontWeight:300, color: "grey"}}}
                  onChange={onChange}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <CssTextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                variant="filled"
                onChange={onChange}
                inputProps={{style: {fontWeight: 300}}}
                InputLabelProps ={{
                  style: {fontWeight:300, color: "grey"}
                }}
                />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CssTextField 
              fullWidth 
              id="email"
              name="email" 
              label="Email"
              value={email}
              variant="filled"
              onChange={onChange}
              inputProps={{style: {fontWeight: 300}}}
              InputLabelProps ={{
                style: {fontWeight:300, color: "grey"}
              }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CssTextField
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
              inputProps={{style: {fontWeight: 300}}}
              InputLabelProps ={{
                style: {fontWeight:300, color: "grey"}
              }}
            />
            <Grid item xs={12}>
                <Button type="submit" disabled={isFormValid()} fullWidth variant="contained" style={{marginTop: "8px", fontWeight: 300, color: "grey", boxShadow: "none"}} >Send</Button>
            </Grid>
            </Grid>

          </Grid>
        </form>
      </div>
    );
}