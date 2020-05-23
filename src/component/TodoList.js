import React, {useState} from 'react';
import TodoItem from "./TodoItem";

function TodoList({todoItems, onToggleItemHandler, onDeleteItemHandler, onEditItemHandler, onSubmitItemHandler}) {
    return (
        <>
            <ul id="todo-list" className="todo-list">
                {todoItems.map(todoItem =>
                    <TodoItem todoItem={todoItem}
                              onToggleItemHandler={onToggleItemHandler}
                              onDeleteItemHandler={onDeleteItemHandler}
                              onEditItemHandler={onEditItemHandler}
                              onSubmitItemHandler={onSubmitItemHandler}/>)}
            </ul>
        </>
    );
}

export default TodoList;