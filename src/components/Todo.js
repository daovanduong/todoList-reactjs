import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalEdit } from '../actions/modalEditAction'
import { deleteTodo, markCompletedTodo } from '../actions/todoAction'
import ModalEdit from './ModalEdit'

function Todo(props) {
    const { todo } = props
    const todoEdit = useSelector(state => state.modalTodo)
    const dispatch = useDispatch()

    const deleteItem = (todo) => {
        const action = deleteTodo(todo)
        dispatch(action)
    }
    const markCompleted = (todo) => {
        const action = markCompletedTodo(todo)
        dispatch(action)
    }

    const editItem = (todo) => {
        const action = modalEdit(todo)
        dispatch(action)
    }

    return (
        <>
            <li className={`${todo.isCompleted ? 'completed' : ''}`}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() =>
                            markCompleted(todo)
                        }
                    />
                    <label>
                        {todo.text}
                    </label>
                    <button
                        className="btn-edit"
                        onClick={() => editItem(todo)}
                    />
                    <button
                        className="destroy"
                        onClick={() => deleteItem(todo)}
                    />
                </div>
            </li>

            {todoEdit.show ? <ModalEdit /> : <></>
            }
        </>
    )
}

export default Todo
