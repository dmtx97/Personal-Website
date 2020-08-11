import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';


export default function DeleteBlog(props){

    const [open, setOpen] = useState(false);


    const handleClose = () =>{
        setOpen(false);
    }

    return(

        //put icon component here instead

        <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth={true} >
        <DialogTitle style={{paddingBottom:"0px"}}>Delete Blog</DialogTitle>
        <DialogContent style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "0", paddingBottom: "0px"}}>
        <Typography variant="body1" gutterBottom>
            Are you sure you want to delete this blog? THIS CANNOT BE UNDONE.
      </Typography>
        </DialogContent>
        <DialogActions style={{marginRight: "20px", marginLeft: "20px", marginBottom: "8px", paddingLeft: "0px", paddingRight: "0px"}}>
        <Button variant="contained" style={{fontWeight: 300, color: "grey", boxShadow: "none"}} onClick={handleClose}>Cancel</Button>
        <Button variant="contained" style={{fontWeight: 300, color: "grey", boxShadow: "none"}} onClick={()=>console.log("deleted!")}>Delete</Button>
        </DialogActions>
      </Dialog>
    );
}