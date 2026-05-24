import {useCallback, useReducer} from "react";
import {todoActions} from "../utils/todo.actions";
import {initialState, todoReducer} from "../utils/todo.reducer";


export const useTodo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const setInputValue = useCallback(value => {
        dispatch(todoActions.setInput(value));
    }, []);

    const addTodo = useCallback(() => {
        dispatch(todoActions.addTodo())
    }, []);

    const toggleTodo = useCallback(id => {
        dispatch(todoActions.toggleTodo(id));
    }, []);

    const removeTodo = useCallback(id => {
        dispatch(todoActions.removeTodo(id));
    }, []);

    const clearTodos = useCallback(() => {
        dispatch(todoActions.clearTodos());
    }, []);

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