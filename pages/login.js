import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { CssTextField } from '../style/MaterialStyleVariant';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../api';

export default function Login(){    

    const api = new API();

    const initialState ={
        email: "",
        password: "",
    }

    const [{email, password}, setState] = useState(initialState);
    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };


    const handleLogin = () =>{
        let data = {
            email: email.trim(),
            password: password.trim(),
        }
        
        api.verifyUser(data);
        setState(initialState);
        console.log(data);
    }
    

    return (
        <div>
            <Dialog open={true} aria-labelledby="form-dialog-title" fullWidth={true} >
                    <DialogTitle style={{paddingBottom:"0px"}}>Log In</DialogTitle>
                    <DialogContent style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "0", paddingBottom: "0px"}}>
                    <CssTextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email"
                        value={email}
                        variant="filled"
                        fullWidth
                        onChange={onChange}
                        style={{marginTop: "10px", marginBottom: "0px"}}
                    />

                    <CssTextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        variant="filled"
                        fullWidth
                        onChange={onChange}
                        style={{marginTop: "10px", marginBottom: "0px"}}
                    />
                    
                    </DialogContent>
                    <DialogActions style={{marginRight: "20px", marginLeft: "20px", marginBottom: "8px", paddingLeft: "0px", paddingRight: "0px"}}>
                    <Button variant="contained" style={{fontWeight: 300, color: "grey", boxShadow: "none"}} onClick={handleLogin}>Submit</Button>
                    </DialogActions>
                </Dialog>
        </div>
    );
}