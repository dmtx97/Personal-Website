import API from '../api';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { Fragment, useState, useEffect } from 'react';

export default function DeleteBlog(props){
    const api = new API();
    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
      setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleDelete = () =>{
      handleClose();
      api.deleteBlogEntry(props.blog_id)
    }

    return(
      <Fragment>
        <DeleteIcon onClick={handleOpen} style={{ cursor:"pointer", verticalAlign:"middle", marginLeft: "4px", transform: "translatey(4px)", color: "#808080"}}/> 
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth={true} >
          <DialogTitle style={{paddingBottom:"0px", paddingLeft: "20px"}}>Delete Blog</DialogTitle>
          <DialogContent style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "0", paddingBottom: "0px"}}>
            <Typography style={{marginTop: "10px", marginBottom: "10px"}}>
                Are you sure you want to delete this blog? <strong>THIS CANNOT BE UNDONE</strong>.
            </Typography>
          </DialogContent>
          <DialogActions style={{marginRight: "20px", marginLeft: "20px", marginBottom: "8px", paddingLeft: "0px", paddingRight: "0px"}}>
            <Button variant="contained" style={{fontWeight: 300, color: "grey", boxShadow: "none"}} onClick={handleClose}>Cancel</Button>
            <Button variant="contained" style={{ background: "#23132D", fontWeight: 300, color: "white", boxShadow: "none"}} onClick={handleDelete}>Delete</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
}