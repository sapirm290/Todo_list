import React from 'react'
import Typography from '@material-ui/core/Typography';

const TodoItem = ({ todoItem }) => {
    return (
        <div>
            <Typography variant="h6" component="p">{`${todoItem.description} ${todoItem.due} : ${todoItem.isStarred ? " star" : " no-star"}`}</Typography>

        </div>
    )
}

export default TodoItem
