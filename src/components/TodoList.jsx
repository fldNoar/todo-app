import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove, onClear }) => {
    return (
        <div>
            <ol className="todo_list">
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))}
            </ol>
            <button
                type='button'
                onClick={onClear}
                disabled={!todos.length}
            >
                Clear all
            </button>
        </div>
    );
};

export default TodoList;