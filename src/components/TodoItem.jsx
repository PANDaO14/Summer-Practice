import React from 'react';

import deleteBtn from "../img/delete.svg";

const TodoItem = ({ todo, index, deleteTodo, markComplete }) => {
    
    const handleDelete = () => {
        deleteTodo(index);
    };

    const handleMarkComplete = () => {
        markComplete(index);
    };

    return (
        <li className='todo__list__item'>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <div className="todo__list__item-btns">
                <button onClick={handleDelete}>
                    <img src={deleteBtn} alt="delete" />
                </button>
                <input type="checkbox" checked={todo.completed} onChange={handleMarkComplete} />
            </div>
        </li>
    );
};

export default TodoItem;