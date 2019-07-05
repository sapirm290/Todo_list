import React from 'react'
import AppPresentational from './AppPresentational';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const REMOVE = "REMOVE"
const SETDONE = "SETDONE"
const SETSTARRED = "SETSTARRED"
const ADD = "ADD"
const SAVE = "SAVE"
const LOAD = "LOAD"

const AppContainer = () => {
    const initialState = {
        taskIndex: 1,
        todos: [
            { index: 0, description: "Todo item example1", due: "September 14 2015", isDone: false, isStarred: true },
        ]
    }
    const rootReducer = (state = initialState, action) => {
        let newState;
        switch (action.type) {
            case (SAVE):
                localStorage.saveCopy = JSON.stringify(initialState)
                return state
            case (LOAD):
                if (localStorage.hasOwnProperty("saveCopy"))
                    return JSON.parse(localStorage.saveCopy)
                return state
            case (ADD):
                newState = Object.assign({}, state)
                newState.todos.push({ description: action.description, due: action.due, index: newState.taskIndex, isDone: false, isStarred: false })
                newState.taskIndex++;
                return newState
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
            state.todos.filter(item => !item.isDone).sort((a, b) => b.isStarred - a.isStarred).map(element => element.index),
            state.todos.filter(item => item.isDone).sort((a, b) => b.isStarred - a.isStarred).map(element => element.index)
        ]
        return { listsForRendering: listsForRendering }
    }
    const mapDispatchToProps = dispatch => {
        return {
            saveTasks: () => {
                dispatch({ type: SAVE })
            },
            loadTasks: () => {
                dispatch({ type: LOAD })
            }
        }
    }

    const ConnectedApp = connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppPresentational)

    return (
        <Provider store={store}>
            <ConnectedApp />
        </Provider>

    )
}

export default AppContainer
