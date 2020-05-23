import React, {useState} from 'react';

function TodoInput({onAddItemHandler}) {
    const [value, setValue] = useState("");

    function onChangeHandler(e) {
        setValue(e.target.value)
    }
    
    function onEnterHandler(e) {
        if (e.key === "Enter") {
            onAddItemHandler({title: e.target.value, completed: false, edited: false })
            setValue("");
        }
    }

    return (
        <div>
            <h1>TODOS</h1>
            <input id="new-todo-title"
                   value={value}
                   onChange={onChangeHandler}
                   onKeyPress={onEnterHandler}
                   className="new-todo"
                   placeholder="할일을 추가해주세요" autoFocus/>
        </div>
    );
}

export default TodoInput;