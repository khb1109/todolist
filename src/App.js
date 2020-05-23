import React, {useState} from 'react';
import './App.css';
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import TodoCount from "./component/TodoCount";
import TodoFilter from "./component/TodoFilter";

function App() {
    const [filter, setFilter] = useState({type:"ALL", completed:false});
    const [todoItems, setTodoItems] = useState([]);
    const [showItems, setShowItems] = useState([]);
    const [selected, setSelected] = useState([true, false, false]);

    const onAddItemHandler = (item) => {
        item['id'] = todoItems.length
        setState(todoItems.concat(item));
    }

    const onToggleItemHandler = id => {
        const updatedItems = todoItems.map(todoItem => {
            if(todoItem.id == id) {
                todoItem.completed =!todoItem.completed
            }
            return todoItem
        });
        setState(updatedItems);
    }

    const onDeleteItemHandler = id => {
        const updatedItem = todoItems.filter(todoItem => todoItem.id != id)
        setState(updatedItem)
    }

    const onEditItemHandler = id => {
        const updatedItem = todoItems.map(todoItem => {
            if(todoItem.id == id) {
                todoItem.edited = true
            }
            return todoItem
        });

        setState(updatedItem);
    }

    const onSubmitItemHandler = (id,title) => {
        const updatedItems = todoItems.map( todoItem => {
                if (todoItem.id == id) {
                    todoItem.title = title;
                    todoItem.edited = false;
                }
                return todoItem
            }
        )
        setState(updatedItems)
    }

    const onFilterHandler = value => {
        setFilter(value);
        setState(todoItems)
    }
    const setState = items => {
        setTodoItems(items);
        const updatedShowItems = filter.type == "ALL"
                ? items
                : items.filter(item => item.completed === filter.completed)

        if (filter.type === "ALL") {
            setSelected([true, false, false]);
        }
        if (filter.type === "ACTIVE") {
                setSelected([false, true, false]);
        }
        if (filter.type === "COMPLETED") {
            setSelected([false, false, true]);
        }

        setShowItems(updatedShowItems)
    }
    return (
        <>
            <section className="todoapp">
                <TodoInput onAddItemHandler={onAddItemHandler} />
                <div className="main">
                    <input className="toggle-all" type="checkbox"/>
                    <TodoList todoItems={showItems}
                              onToggleItemHandler={onToggleItemHandler}
                              onDeleteItemHandler={onDeleteItemHandler}
                              onEditItemHandler={onEditItemHandler}
                              onSubmitItemHandler={onSubmitItemHandler}  />
                </div>
                <div className="count-container">
                    <TodoCount todoItems={showItems.length}/>
                    <TodoFilter onFilterHandler={onFilterHandler} selected={selected}/>
                </div>
            </section>
        </>
    );
}

export default App;
