import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Link,  List, ListItem, ListItemText, ListItemAvatar, DialogTitle, Dialog, Avatar } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';

export const YesNoLinkDialog = ({url, open, setOpen}) => {
    const classes = useStyles();

    return (
        <Dialog onClose={()=> setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle>Live in Georgia?</DialogTitle>
            <List>
                <Link href={url} target="_new">
                <ListItem button onClick={() => setOpen(false)} >
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={"Yes, I live in Georgia"} />
                </ListItem>
                </Link>

                <ListItem autoFocus button onClick={() => setOpen(false)}>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="No - Cancel" />
                </ListItem>
            </List>
        </Dialog>
    );
}

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});