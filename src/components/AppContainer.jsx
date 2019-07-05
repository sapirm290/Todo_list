import React from 'react'
import AppPresentational from './AppPresentational';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
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
        let newState;
        switch (action.type) {
            case (REMOVE):
                newState = Object.assign({}, state)
                let indexToRemove = newState.todos.indexOf(element => element.index === action.index)
                newState.todos.splice(indexToRemove, 1)
                console.log(newState);
                return newState;
            case (SETDONE):
                newState = Object.assign({}, state)

                let indexToSetDone = newState.todos.indexOf(newState.todos.find(element => element.index === action.index))
                console.log(action.index);
                console.log(indexToSetDone);
                newState.todos[indexToSetDone].isDone = !newState.todos[indexToSetDone].isDone;
                return newState
            case (SETSTARRED):
                newState = Object.assign({}, state)
                let indexToSetStarred = newState.todos.indexOf(newState.todos.find(element => element.index === action.index))
                newState.todos[indexToSetStarred].isStarred = !newState.todos[indexToSetStarred].isStarred;
                return newState
            default:
                return state;
        }

    }

    const store = createStore(rootReducer);

    const mapStateToProps = (state) => {
        let listsForRendering = [
            store.getState().todos.filter(item => item.isDone),
            store.getState().todos.filter(item => !item.isDone)
        ]
        return { listsForRendering: listsForRendering }
    }
    const ConnectedApp = connect(
        mapStateToProps,
        null
    )(AppPresentational)

    return (
        <Provider store={store}>
            <ConnectedApp />
        </Provider>

    )
}

export default AppContainer
