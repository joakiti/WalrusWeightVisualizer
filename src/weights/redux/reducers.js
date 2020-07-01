import {CREATE_WEIGHT, REMOVE_WEIGHT} from './actions';

export const weights = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_WEIGHT: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case REMOVE_WEIGHT: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    default:
        return state;
    }
}