import React from 'react';

const NewTodo = ({ inputValue, onChange, onAdd }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter a todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default NewTodo;