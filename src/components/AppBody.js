import React from 'react'
import Container from '@material-ui/core/Container';
import TodoItem from './TodoItem';
import CreateItem from "./CreateItem"
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { palette, spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        color: "white"
    },
    title: {
        fontWeight: 550
    }
}));

function AppBody({ todoList, doneList, itemActions }) {
    //     const Box = styled.div`
    //   ${palette}
    //   ${spacing}
    // `;
    const logicLists = { todoList: todoList, doneList: doneList };
    const lists = {};
    for (const key in logicLists) {
        lists[key] = [];
        for (let index = 0; index < logicLists[key].length; index++) {
            lists[key].push(

                <TodoItem key={logicLists[key][index].key} index={logicLists[key][index].key} todoItem={logicLists[key][index]} removeItem={itemActions.removeItem} />
            )
        }
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.root} maxWidth="md" >

                <CreateItem addItem={itemActions.addItem}>
                </CreateItem>
                <Box variant="contained" color="secondary" p={3} >
                    <Typography variant="h5" color="primary" className={classes.title}> To-do :</Typography>
                    {lists["todoList"]}
                </Box>
                <List>


                </List>
                <Divider />
                <Box color="secondary" p={3} >
                    <Typography variant="h5" color="primary" className={classes.title}> Done :</Typography>

                    {lists["doneList"]}
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default AppBody
