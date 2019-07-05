import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function ItemCreationPanel({ addItem }) {
    const [task, setTask] = useState({ description: "I need to do what?...", due: "At what time? " })
    return (
        <div>
            <Box color="secondary" bgcolor="primary" p={3} m={2}>
                <TextField onChange={(e) => { setTask({ ...task, description: e.target.value }) }}
                    value={task.description}
                />
                <TextField
                    onChange={(e) => { setTask({ ...task, due: e.target.value }) }}
                    value={task.due} />
                <Button variant="contained" color="primary" onClick={() => { addItem(task) }}>Add Item</Button>
            </Box>
        </div>
    )
}

export default ItemCreationPanel
