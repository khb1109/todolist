import React, {useState} from 'react';

function TodoItem({todoItem, onToggleItemHandler, onDeleteItemHandler, onEditItemHandler, onSubmitItemHandler}) {
    const [keyState, setKeyState] = useState(todoItem.title)

    const onToggleClick = (e) => {
        onToggleItemHandler(todoItem.id)
    }

    const onDeleteClick = (e) => {
        onDeleteItemHandler(todoItem.id)
    }

    const onEditClick = (e) => {
        onEditItemHandler(todoItem.id)
    }

    const onKeyChange = e => {
        setKeyState(e.target.value)
    }

    const onKeyClick = e => {
        if (e.key === "Enter") {
            onSubmitItemHandler(todoItem.id, e.target.value)
        }
        if (e.key === "Escape") {
            onSubmitItemHandler(todoItem.id, todoItem.title)
        }
    }

    return (
        <>
            <li key={todoItem.id}
                className={(todoItem.completed ? "completed" : "") + (todoItem.edited ? "editing" : "")}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={onToggleClick}/>
                    <label className="label" onDoubleClick={onEditClick}>{todoItem.title}</label>
                    <button className="destroy" onClick={onDeleteClick} />
                </div>
                <input className="edit"
                       value={keyState}
                       onChange={onKeyChange}
                       onKeyDown={onKeyClick}
                />
            </li>
        </>
    );
}

export default TodoItem;