import {CREATE_WEIGHT, REMOVE_WEIGHT} from './actions';

export const weights = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_WEIGHT: {
        const { weight } = payload;
        const newTodo = {
            weight,
        };
        return state.concat(newTodo);
    }
    case REMOVE_WEIGHT: {
        const { weight } = payload;
        return state.filter(todo => todo.weight !== weight);
    }
    default:
        return state;
    }
}