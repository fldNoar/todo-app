import React from 'react';

const TodoItem = ({ todo, onRemove, onToggle }) => {
    return (
        <li data-id={todo.id} className={todo.done ? 'todo_item todo_item--completed' : 'todo_item'}>
            <div>
                <input
                    data-action='toggle'
                    id={todo.id}
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                />
                <label htmlFor={todo.id}>{todo.text}</label>
            </div>
            <button type='button' onClick={() => onRemove(todo.id)}>remove</button>
        </li>
    );
};

export default TodoItem;