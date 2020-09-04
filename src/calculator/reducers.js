import {START_CALCULATION, WRITE_OPTIMAL, WRITE_TO} from './actions';
import {initial_goal, initial_weights} from "../config/store";

const defaultCalculatorValue = () => {
    let x = new Array(initial_weights)
    for (let i = 0; i <= initial_weights.length; i++) {
        x[i] = new Array(initial_goal * 2)
    }
    return x;
}

export const calculator = (state = defaultCalculatorValue(), action) => {
    const {type, payload} = action;

    switch (type) {
        case START_CALCULATION: {
            const {weights, goal} = payload;

            let x = new Array(weights);
            for (let i = 0; i < weights.length; i++) {
                x[i] = new Array(goal * 2)
            }
            return x;
        }
        case WRITE_TO: {
            const {weight, targetWeight, value} = payload;
            let x = state;
            x[weight][targetWeight] = value;
            return x;
        }
        case WRITE_OPTIMAL: {
            const {noOfWeights, targetWeight, weights} = payload;
            let x = state;

            let weightIndex = noOfWeights;

            x[noOfWeights][targetWeight] = x[noOfWeights - 1][targetWeight] || x[noOfWeights - 1][targetWeight - weights[weightIndex].weight]

            return x;
        }
        default:
            return state;
    }
}