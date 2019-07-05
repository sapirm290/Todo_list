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
import AppHeader from "./AppHeader"
import TodoItemWrapper from './TodoItemContainer'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        color: "white"
    },
    title: {
        fontWeight: 550
    }
}));

function AppPresentational({ listsForRendering, itemActions }) {
    const classes = useStyles();

    //     const Box = styled.div`
    //   ${palette}
    //   ${spacing}
    // `;
    console.log("current lists:");
    console.log(listsForRendering)
    const logicLists = { todoList: listsForRendering[0], doneList: listsForRendering[1] };
    const lists = {};
    for (const key in logicLists) {
        lists[key] = [];
        for (let index = 0; index < logicLists[key].length; index++) {
            lists[key].push(
                <TodoItemWrapper index={logicLists[key][index].index} key={logicLists[key][index].index} />
            )
        }
    }

    return (
        <React.Fragment>
            <AppHeader>
            </AppHeader>
            <Container className={classes.root} maxWidth="md" >

                <CreateItem>
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

export default AppPresentational
