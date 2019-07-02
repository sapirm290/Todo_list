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
import Button from '@material-ui/core/Button';

function AppBody(props) {
    //     const Box = styled.div`
    //   ${palette}
    //   ${spacing}
    // `;

    const lists = {};
    for (const key in props) {
        lists[key] = [];
        for (let index = 0; index < props[key].length; index++) {
            lists[key].push(
                <TodoItem key={props[key][index].key} todoItem={props[key][index]} />
            )
        }
    }
    const theme = createMuiTheme();
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <Container maxWidth="sm">
                    <CreateItem>
                        <Box color="secondary" bgcolor="primary" p={3} m={2}>
                            <TextField hintText="Task Description" floatingLabelText="Description"
                                defaultValue="Buy food for home" />
                            <TextField hintText="Due time" floatingLabelText="Due time"
                                defaultValue="July 5 2019" />
                            <Button variant="contained" color="primary" component="span">Add Item</Button>
                        </Box>
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
