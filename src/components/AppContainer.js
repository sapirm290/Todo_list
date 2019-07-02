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
    const addItem = (description, due) => {
        console.log(description + due);
        setList([...list, { key: key, description: description, due: due, isDone: false, isStarred: false }])
        setKey(key + 1)
        console.log(list);
    }

    const removeItem = (itemkey) => {
            const newList = list.filter(item => item.key != itemkey)
            setList(newList);
    }
    // const setItemStarred = (itemkey) => {

    //     setList(,,,list, {})
    // }
    // const setItemDone = (index) => {
    //     const newList = list.filter(item => {})
    // }
    const itemActions = {addItem: addItem, removeItem: removeItem};
    return (
        <AppBody
            // logicLists={[list.filter(item => item.isDone === true), list.filter(item => item.isDone === false)]}
            doneList={list.filter(item => item.isDone === true)}
            todoList={list.filter(item => item.isDone === false)}
            itemActions={itemActions} />
    )
}

export default AppContainer
