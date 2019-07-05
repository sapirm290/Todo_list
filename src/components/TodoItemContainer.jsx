import { connect } from 'react-redux'
import TodoItem from './TodoItem'

const REMOVE = "REMOVE"
const SETDONE = "SETDONE"
const SETSTARRED = "SETSTARRED"
const removeItemAction = (index) => {
    return {
        type: REMOVE,
        index: index
    }
}
const setItemDoneAction = (index) => {
    return {
        type: SETDONE,
        index: index
    }
}
const setItemStarredAction = (index) => {
    return {
        type: SETSTARRED,
        index: index
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem: (index, e) => {
            if (typeof e != 'undefined')
                e.stopPropagation();
            dispatch(removeItemAction(index))
        },
        setItemDone: (index, e) => {
            if (typeof e != 'undefined')
                e.stopPropagation();
            dispatch(setItemDoneAction(index))
        },
        setItemStarred: (index, e) => {
            if (typeof e != 'undefined')
                e.stopPropagation();
            dispatch(setItemStarredAction(index))
        }
    }
}

const mapStateToProps = (state, props) => {
    let todoItemObject = state.todos.find(element => element.index === props.index)
    return todoItemObject
}

const TodoItemWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem)

export default TodoItemWrapper