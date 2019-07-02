import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const TodoItem = ({ index, todoItem, removeItem }) => {
    return (
        <div>
            <Typography variant="h6"
                component="p">{`${todoItem.description} ${todoItem.due} : ${todoItem.isStarred ? " star" : " no-star"}`}</Typography>
            <Button onClick={() => { removeItem(index) }}>Remove</Button>
        </div>
    )
}

export default TodoItem
