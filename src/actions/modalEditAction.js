export const modalEdit = (todo) => {
    return {
        type: 'MODAL_EDIT',
        payload: todo,
    }
}

export const updateTodoModal = (text) => {
    return {
        type: 'UPDATE_MODAL',
        payload: text,
    }
}

export const closeModal = (show) => {
    return {
        type: 'CLOSE_MODAL',
        payload: show,
    }
}