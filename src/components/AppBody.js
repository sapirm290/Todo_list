import React from 'react'
import Container from '@material-ui/core/Container';
import TodoItem from './TodoItem';
import CreateItem from "./CreateItem"
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { palette, spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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
    const theme = createMuiTheme();
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <Container maxWidth="sm">
                    <CreateItem addItem={itemActions.addItem}>
                    </CreateItem>
                    <Box color="secondary" bgcolor="primary" p={3} m={2}>
                        {lists["todoList"]}
                    </Box>
                    <Box color="secondary" bgcolor="primary" p={3} m={2}>
                        {lists["doneList"]}
                    </Box>
                </Container>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default AppBody
