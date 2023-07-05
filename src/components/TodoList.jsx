import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, markComplete, deleteAllTodos }) => {

    const handleDeleteAll = () => {
        deleteAllTodos();
    };

    return (
        <div className="todo__list__items">
            <ul className='todo__list__ul'>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} markComplete={markComplete} />
                ))}
            </ul>
            {todos.length > 0 && (
                <button className='todo__list__allDeleteBtn' onClick={handleDeleteAll}>
                    Удалить все
                </button>
            )}
        </div>
    );
};

export default TodoList;