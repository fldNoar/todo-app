import {TODO_ACTIONS} from "../constants/todo.constants";

export const todoActions = {
    setInput: (value) => ({
        type: TODO_ACTIONS.SET_INPUT,
        payload: value,
    }),

    addTodo: () => ({
        type: TODO_ACTIONS.ADD_TODO,
    }),

    removeTodo: (id) => ({
        type: TODO_ACTIONS.REMOVE_TODO,
        payload: id,
    }),

    toggleTodo: (id) => ({
        type: TODO_ACTIONS.TOGGLE_TODO,
        payload: id,
    }),

    clearTodos: () => ({
        type: TODO_ACTIONS.CLEAR_TODOS,
    })
}