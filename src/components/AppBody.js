import React from 'react'
import Container from '@material-ui/core/Container';
import TodoItem from './TodoItem';
import CreateItem from "./CreateItem"
import Box from '@material-ui/core/Box';

function AppBody(props) {
    const lists = {};
    for (const key in props) {
        lists[key] = [];
        for (let index = 0; index < props[key].length; index++) {
            lists[key].push(
                <TodoItem key={props[key][index].key} todoItem={props[key][index]} />
            )
        }
    }
    return (
        <div>
            <CreateItem></CreateItem>
            <Container maxWidth="sm">
                <Box  color="white" bgcolor="gray" p={3}>
                    {lists["todoList"]}
                </Box>


            </Container>
            <Container maxWidth="sm">
                <div>
                    {lists["doneList"]}
                </div>

            </Container>
        </div>
    )
}

export default AppBody
