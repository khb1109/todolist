import React from 'react';

function FilterItem({type, text, onFilterHandler, selected}) {

    const onButtonClick = (e) => {
        e.preventDefault();
        if (type == "all") {
            onFilterHandler({type: "ALL", completed: false})
        }
        if (type == "active") {
            onFilterHandler({type: "ACTIVE", completed: false})
        }
        if (type == "completed") {
            onFilterHandler({type: "COMPLETED", completed: true})
        }
    }
    const selectedClass = selected ? "selected" :"";
    return (
        <li>
            <a
                className={[type, selectedClass].join(" ")}
                href=" "
                onClick={onButtonClick}>
                {text}</a>
        </li>
    );
}

export default FilterItem;