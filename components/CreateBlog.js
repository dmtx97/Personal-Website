import Button from '@material-ui/core/Button';
import { CssTextField, PurpleButton } from '../style/MaterialStyleVariant';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import API from "../api/";

export default function CreateBlog(){

    const showdown = require('showdown');
    const converter = new showdown.Converter();
    const api = new API();

    const initialState = {
        title: "",
        description: "",
        body: ""
    }

    const [open, setOpen] = useState(false);
    const [{title, description, body}, setState] = useState(initialState);
    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };
    
    const fabOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleBlogSubmission = () => {

      let data = {
        title: title.trim(),
        description: description.trim(),
        body: body
      }

      api.postBlogEntry(data);
      setState(initialState);
      handleClose();
    }

    const style = {
        margin: 0,
        top: 'auto',
        right: 50,
        bottom: 50,
        left: 'auto',
        position: 'fixed',
        background: '#1A2533',
        color: 'white'
      };
    
    return(
        <div>
        <Fab size="large" aria-label="add" style={style} onClick={fabOpen}>
          <AddIcon />
        </Fab>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true} >
        <DialogTitle style={{paddingBottom:"0px", paddingRight:"20px", paddingLeft: "20px"}}>New Blog</DialogTitle>
        <DialogContent style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "0", paddingBottom: "0px"}}>
          <CssTextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Title"
            onChange={onChange}
            variant="filled"
            fullWidth
            style={{marginTop: "10px", marginBottom: "0px"}}
          />

          <CssTextField
            
            margin="dense"
            id="description"
            name="description"
            label="Description"
            onChange={onChange}
            multiline
            rows={3}
            variant="filled"
            fullWidth
            style={{marginTop: "10px", marginBottom: "0px"}}
          />
        <CssTextField
            
            margin="dense"
            id="body"
            name="body"
            label="Body"
            onChange={onChange}
            variant="filled"
            multiline
            rows={20}
            fullWidth
            style={{marginBottom: "0px"}}
          />
        </DialogContent>
        <DialogActions style={{marginRight: "20px", marginLeft: "20px", marginBottom: "8px", paddingLeft: "0px", paddingRight: "0px"}}>
        <Button variant="contained" style={{fontWeight: 300, color: "grey", boxShadow: "none"}} onClick={handleClose}>Cancel</Button>
        <Button variant="contained" style={{ background: "#1A2533", fontWeight: 300, color: "white", boxShadow: "none"}} onClick={handleBlogSubmission}>Post</Button>
        </DialogActions>
      </Dialog>

        </div>
    );
}