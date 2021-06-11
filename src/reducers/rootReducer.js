import { combineReducers } from "redux";
import modalTodoReducer from "./modalEditReducer";
import todoReducer from "./todoReducer";


const rootReducer = combineReducers({
    todo: todoReducer,
    modalTodo: modalTodoReducer,
})

export default rootReducer;