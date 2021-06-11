import { closeModal, updateTodoModal } from 'actions/modalEditAction'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


function ModalEdit(props) {

    const todo = useSelector(state => state.modalTodo.todo)
    const show = useSelector(state => state.modalTodo.show)
    const [input, setInput] = useState(todo.text)
    const dispatch = useDispatch()

    const updateTodo = (input) => {
        const action = updateTodoModal(input)
        dispatch(action)
    }

    const clickCloseModal = (show) => {
        const action = closeModal(show)
        dispatch(action)
    }

    return (
        <div className="modalEdit">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input
                        type="text"
                        value={input}
                        className="form-control"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => { clickCloseModal(show) }}
                    >Đóng</Button>
                    <Button
                        variant="primary"
                        onClick={() => updateTodo(input)}
                    >Lưu</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default ModalEdit
