import React from 'react'
import AppBody from './AppBody';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { element } from 'prop-types';

const REMOVE = "REMOVE"
const SETDONE = "SETDONE"
const SETSTARRED = "SETSTARRED"
const AppContainer = () => {
    // const [list, setList] = useState(
    //     [
    //         { key: 0, description: "Todo item example", due: "September 14 2015", isDone: false, isStarred: true },
    //         { key: 1, description: "Done item example", due: "September 14 2015", isDone: true, isStarred: false },
    //     ]
    // )
    // const [key, setKey] = useState(4);
    // const addItem = (description, due) => {
    //     console.log(description + due);
    //     setList([...list, { key: key, description: description, due: due, isDone: false, isStarred: false }])
    //     setKey(key + 1)
    //     console.log(list);
    // }

    // const removeItem = (itemkey) => {
    //     const newList = list.filter(item => item.key !== itemkey)
    //     setList(newList);
    // }
    // const setItemStarred = (itemkey) => {

    //     setList(,,,list, {})
    // }
    // const setItemDone = (index) => {
    //     const newList = list.filter(item => {})
    // }
    // const itemActions = { addItem: addItem, removeItem: removeItem };
    const initialState = {
        todos: [
            { index: 0, description: "Todo item example", due: "September 14 2015", isDone: false, isStarred: true },
            { index: 1, description: "Done item example", due: "September 14 2015", isDone: true, isStarred: false }
        ]
    }
    const rootReducer = (state = initialState, action) => {
        switch (action.type) {
            case (REMOVE):
                let newState = Object.assign({}, state)
                // newState.todos.find(element => element.index === action.index)
                let positionToRemove = newState.todos.indexOf(element => element.index === action.index)
                newState.todos.splice(positionToRemove,1)
                console.log(newState);
                return newState;
                // case (SETDONE)
                // case (SETSTARRED):
            default:
                return state;
        }

    }

    const store = createStore(rootReducer);
    console.log(store.getState());
    let listsForRender = [
        store.getState().todos.filter(item => item.isDone === true),
        store.getState().todos.filter(item => item.isDone === false)
    ]
    return (
        <Provider store={store}>
            <AppBody
                // logicLists={[list.filter(item => item.isDone === true), list.filter(item => item.isDone === false)]}
                listsForRender={listsForRender} />
        </Provider>

    )
}

export default AppContainer
