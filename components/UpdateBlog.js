import { Fragment, useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { CssTextField, PurpleButton } from '../style/MaterialStyleVariant';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function UpdateBlog(props){

    const initialState ={
        title: props.title,
        description : props.description,
        body : props.body
    }

    const [{title, description, body}, setState] = useState(initialState);

    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleBlogUpdate = () =>{
        let data = {
            title: title,
            description : description,
            body : body
        }

        console.log(data)
    }

    return(

        <Fragment>

            <EditIcon onClick={handleOpen} style={{cursor: "pointer", verticalAlign:"middle", marginRight: "4px", transform: "translatey(4px)", color: "#808080"}}/> 


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true} >
                <DialogTitle style={{paddingBottom:"0px"}}>Edit Blog</DialogTitle>
                <DialogContent style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "0", paddingBottom: "0px"}}>
                <CssTextField
                    autoFocus
                    margin="dense"
                    id="title"
                    name="title"
                    label="Title"
                    value={title}
                    onChange={onChange}
                    variant="filled"
                    fullWidth
                    style={{marginTop: "10px", marginBottom: "0px"}}
                />

                <CssTextField
                    autoFocus
                    margin="dense"
                    id="description"
                    name="description"
                    value={description}
                    label="Description"
                    onChange={onChange}
                    multiline
                    rows={3}
                    variant="filled"
                    fullWidth
                    style={{marginTop: "10px", marginBottom: "0px"}}
                />
                <CssTextField
                    autoFocus
                    margin="dense"
                    id="body"
                    name="body"
                    value={body}
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
                <Button variant="contained" color="primary" style={{ background: "#23132D",fontWeight: 300, color: "white", boxShadow: "none"}} onClick={handleBlogUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </Fragment>



    );
}