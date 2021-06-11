const initialState = {
    list: [
        { id: 1, text: 'abcd', isCompleted: true },
        { id: 2, text: 'abcde', isCompleted: false },
    ],
    setFilterStatus: {
        isAll: true,
        isActive: false,
        isCompleted: false,
    },
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newList = [...state.list]
            newList.unshift(action.payload)

            return {
                ...state,
                list: newList,
            }
        }

        case 'DEL_TODO': {
            const newList = [...state.list]
            const index = newList.findIndex(item => item.id === action.payload.id)
            newList.splice(index, 1)

            return {
                ...state,
                list: newList
            }
        }

        case 'MARK_COMPLETED_TODO': {
            const newList = [...state.list]
            newList.map(item => {
                if (item.id === action.payload.id) {
                    item.isCompleted = !item.isCompleted
                }
                return newList
            })

            return {
                ...state,
                list: newList
            }

        }

        case 'EDIT_TODO': {
            const newList = [...state.list]
            const todo = newList.find(item => item.id === action.payload.id)
            console.log(todo)
        }

        case 'ALL': {
            let status = { ...state.setFilterStatus }
            status = action.payload
            return {
                ...state,
                setFilterStatus: status,
            }
        }

        case 'ACTIVE': {
            let status = { ...state.setFilterStatus }
            status = action.payload

            return {
                ...state,
                setFilterStatus: status,
            }
        }

        case 'COMPLETED': {
            let status = { ...state.setFilterStatus }
            status = action.payload

            return {
                ...state,
                setFilterStatus: status,
            }
        }

        default:
            return state
    }
}

export default todoReducer;