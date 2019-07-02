import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function CreateItem({ addItem }) {
    const [task, setTask] = useState({ description: "", due: "" })
    return (
        <div>
            <Box color="secondary" bgcolor="primary" p={3} m={2}>
                <TextField onChange={(e) => { setTask({...task, description: e.target.value }) }}
                    value={task.description} floatingLabelText="Description"
                    defaultValue="Buy food for home" />
                <TextField hintText="Due time" floatingLabelText="Due time"
                    onChange={(e) => { setTask({...task, due: e.target.value }) }}
                    value={task.due} defaultValue="July 5 2019" />
                <Button variant="contained" color="primary" onClick={() => { addItem(task.description, task.due) }}>Add Item</Button>
            </Box>
        </div>
    )
}

export default CreateItem
