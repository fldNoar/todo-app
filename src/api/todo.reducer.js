import {TODO_ACTIONS} from "../constants/todo.constants";

export const initialState = {
    inputValue: '',
    todos: [],
}

const handlers = {
    [TODO_ACTIONS.SET_INPUT]: (state, action) => ({
        ...state,
        inputValue: action.payload,
    }),

    [TODO_ACTIONS.ADD_TODO]: (state) => {
        const text = state.inputValue.trim();

        if (!text) return state;

        const newTodo = {
            id: crypto.randomUUID(),
            text,
            done: false,
        };

        return {
            ...state,
            inputValue: '',
            todos: [...state.todos, newTodo],
        };
    },

    [TODO_ACTIONS.REMOVE_TODO]: (state, action) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),

    [TODO_ACTIONS.TOGGLE_TODO]: (state, action) => ({
        ...state,
        todos: state.todos.map((todo) =>
            todo.id === action.payload
                ? { ...todo, done: !todo.done }
                : todo
        ),
    }),

    [TODO_ACTIONS.CLEAR_TODOS]: (state) => ({
        ...state,
        inputValue: '',
        todos: [],
    }),
};

export const todoReducer = (state, action) => {
    const handler = handlers[action.type];

    if (!handler) throw new Error(`Unknown action type ${action.type}`);

    return handler(state, action);
}