

const initialState = {
    todo: { id: null, text: '', isCompleted: false },
    show: false
}

const modalTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODAL_EDIT': {
            return {
                todo: action.payload,
                show: true,
            }
        }

        case 'UPDATE_MODAL': {
            state.todo.text = action.payload;
            return {
                state
            }
        }

        case 'CLOSE_MODAL': {
            state.show = false
            return {
                state
            }
        }

        default:
            return state
    }
}

export default modalTodoReducer;