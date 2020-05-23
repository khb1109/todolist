import React from 'react';

function TodoCount({todoItems}) {
    return (
        <>
            <span className="todo-count">총 <strong>{todoItems}</strong> 개</span>
        </>
    );
}

export default TodoCount;