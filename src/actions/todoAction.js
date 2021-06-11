export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

export const deleteTodo = (todo) => {
    return {
        type: 'DEL_TODO',
        payload: todo,
    }
}

export const markCompletedTodo = (todo) => {
    return {
        type: 'MARK_COMPLETED_TODO',
        payload: todo,
    }
}

export const changeAll = (obj) => {
    return {
        type: 'ALL',
        payload: obj,
    }
}

export const changeActive = (obj) => {
    return {
        type: 'ACTIVE',
        payload: obj,
    }
}

export const changeCompleted = (obj) => {
    return {
        type: 'COMPLETED',
        payload: obj,
    }
}