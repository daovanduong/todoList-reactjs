import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAll, changeActive, changeCompleted } from 'actions/todoAction'

function Footer(props) {
    const list = useSelector(state => state.todo.list)
    const setFilterStatus = useSelector(state => state.todo.setFilterStatus)

    const dispatch = useDispatch()

    const onChangeAll = (obj) => {
        const action = changeAll(obj)
        dispatch(action)
    }
    const onChangeActive = (obj) => {
        const action = changeActive(obj)
        dispatch(action)
    }
    const onChangeCompleted = (obj) => {
        const action = changeCompleted(obj)
        dispatch(action)
    }

    const filterBtns = [{
        title: 'All',
        isActived: setFilterStatus.isAll,
        onClick: () => onChangeAll({
            isAll: true,
            isActive: false,
            isCompleted: false,
        }),
        link: ''
    }, {
        title: 'Active',
        isActived: setFilterStatus.isActive,
        onClick: () => onChangeActive({
            isAll: false,
            isActive: true,
            isCompleted: false,
        }),
        link: 'active'
    }, {
        title: 'Completed',
        isActived: setFilterStatus.isCompleted,
        onClick: () => onChangeCompleted({
            isAll: false,
            isActive: false,
            isCompleted: true,
        }),
        link: 'completed'
    }]

    const count = (list) => {
        let count = 0
        list.map(item => {
            if (item.isCompleted === false)
                count += 1
        })
        return count
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <span>{count(list)} </span>
                <span>items </span>
                <span>left</span>
            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn => {
                        return < FilterBtn key={`btn${btn.title}`} {...btn} />
                    })
                }
            </ul>
        </footer>
    )
}

const FilterBtn = (props) => {
    const { title, isActived, onClick, link } = props
    return (
        <>
            <li>
                <a
                    href={`#/${link}`}
                    className={`${isActived ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
            <span></span>
        </>
    )
}

export default Footer
