import React, { useState } from 'react';

import addBtn from "../img/add.svg";

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo({
                text,
                completed: false,
            });
            setText('');
        }
    };

    return (
        <form className='todo__list__form' onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Введите задачу" />
            <button type="submit" >
                <img src={addBtn} alt="add" />
            </button>
        </form>
    );
};

export default TodoForm;