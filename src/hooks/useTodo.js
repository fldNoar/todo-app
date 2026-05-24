import {useReducer} from "react";
import {todoActions} from "../utils/todo.actions";
import {initialState, todoReducer} from "../utils/todo.reducer";


export const useTodo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const setInputValue = value => {
        dispatch(todoActions.setInput(value));
    };

    const addTodo = () => {
        dispatch(todoActions.addTodo())
    };

    const toggleTodo = id => {
        dispatch(todoActions.toggleTodo(id));
    };

    const removeTodo = id => {
        dispatch(todoActions.removeTodo(id));
    };

    const clearTodos = () => {
        dispatch(todoActions.clearTodos());
    };

    return {
        inputValue: state.inputValue,
        todos: state.todos,
        setInputValue,
        addTodo,
        toggleTodo,
        removeTodo,
        clearTodos,
    }
}