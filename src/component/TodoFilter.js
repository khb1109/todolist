import React, {useState} from 'react';
import FilterItem from "./FilterItem";

function TodoFilter({onFilterHandler, selected}) {
    return (
        <>
            <ul className="filters">
                <FilterItem type={"all"} text={"전체보기"} onFilterHandler={onFilterHandler} selected={selected[0]}/>
                <FilterItem type={"active"} text={"해야할 일"} onFilterHandler={onFilterHandler} selected={selected[1]}/>
                <FilterItem type={"completed"} text={"완료한 일"} onFilterHandler={onFilterHandler} selected={selected[2]}/>
            </ul>
        </>
    );
}

export default TodoFilter;