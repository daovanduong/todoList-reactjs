import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function TodoList(props) {
    const list = useSelector(state => state.todo.list)
    const filter = useSelector(state => state.todo.setFilterStatus)

    return (
        <section className="main">
            <input className="toggle-all" />
            <label
                htmlFor="toggle-all"
            ></label>
            <ul className="todo-list">
                {
                    filter.isAll ? list.map(todo => {
                        return <Todo
                            key={`todo${todo.id}`}
                            {...{ todo }}
                            {...props}
                        />
                    }) : filter.isActive ? list.map(todo => {
                        if (!todo.isCompleted) {
                            return <Todo
                                key={`todo${todo.id}`}
                                {...{ todo }}
                                {...props}
                            />
                        }
                    }) : filter.isCompleted ? list.map(todo => {
                        if (todo.isCompleted) {
                            return <Todo
                                key={`todo${todo.id}`}
                                {...{ todo }}
                                {...props}
                            />
                        }
                    }) : <></>
                }
            </ul>

        </section>
    )
}

export default TodoList
