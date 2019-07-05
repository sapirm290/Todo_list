import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    container: {
        listStyleType: "none"
    },
    root: {
        listStyleType: "none",
        backgroundColor: theme.palette.secondary.light,
    }
}));


const TodoItem = ({ due, description, isStarred, index, removeItem, setItemDone, setItemStarred }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ListItem button={true} className={classes.root} divider={true} onClick={(e) => setItemDone(index, e)}>
                <IconButton onClick={(e) => setItemStarred(index, e)}>
                    <SvgIcon>
                        <path fill={isStarred ? "#FFD700" : "#FFFFFF"} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </SvgIcon>
                </IconButton>
                <ListItemText primary={`${description} ${due}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete" onClick={(e) => removeItem(index, e)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            {/* <Divider /> */}
        </React.Fragment >
    )
}

export default TodoItem
