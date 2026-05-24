import React from 'react';
import {useTodo} from "./hooks/useTodo";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const TodoApp = () => {
    const {
        inputValue,
        todos,
        setInputValue,
        addTodo,
        toggleTodo,
        removeTodo,
        clearTodos
    } = useTodo();

    return (
        <div className="todo_app">
            <NewTodo inputValue={inputValue} onChange={setInputValue} onAdd={addTodo} />
            <TodoList todos={todos} onClear={clearTodos} onToggle={toggleTodo} onRemove={removeTodo} />
        </div>
    );
};

export default TodoApp;