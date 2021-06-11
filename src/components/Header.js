import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../actions/todoAction'

function Header(props) {

    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const handleValueChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        //Chặn hành vi mặc định của e
        //Prevent reloading browser -- Ngăn chặn tải lại trình duyệt
        e.preventDefault()
        handleTodoFormSubmit(text)
        setText('')
    }

    const handleTodoFormSubmit = (text) => {
        const newTodo = {
            id: new Date().valueOf(),
            text,
            isCompleted: false
        }
        if (text === "") {
            alert("Nhập thiếu")
        } else {
            const action = addNewTodo(newTodo)
            dispatch(action)
        }
    }

    return (
        <header className="header">
            <p>todos</p>
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    type="text"
                    value={text}
                    onChange={handleValueChange}
                />
            </form>
        </header>
    )
}

export default Header
