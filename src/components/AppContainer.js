import React, { useState } from 'react'
import AppBody from './AppBody';



const AppContainer = () => {
    const [list, setList] = useState(
        [
            { key: 0, description: "Todo example", due: "September 14 2015", isDone: false, isStarred: true },
            { key: 1, description: "Todo example", due: "September 14 2015", isDone: true, isStarred: true },
            { key: 2, description: "Buy groceries", due: "July 14 2015", isDone: false, isStarred: true },
            { key: 3, description: "Eat cornflakes", due: "February 12 2015", isDone: true, isStarred: false }
        ]
    )
    const [key, setKey] = useState(4);
    return (
        <AppBody
            doneList={list.filter(item => item.isDone === true)}
            todoList={list.filter(item => item.isDone === false)} />
    )
}

export default AppContainer
