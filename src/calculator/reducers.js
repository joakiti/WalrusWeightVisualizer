import {START_CALCULATION, WRITE_OPTIMAL, WRITE_TO} from './actions';

export const calculator = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case START_CALCULATION: {
            const {weights, goal} = payload;

            let x = new Array(weights + 1);
            for (let i = 0; i <= weights.length; i++) {
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

            let weightIndex = noOfWeights - 1;

            x[noOfWeights][targetWeight] = x[noOfWeights - 1][targetWeight] || x[noOfWeights - 1][targetWeight - weights[weightIndex].weight]

            return x;
        }
        default:
            return state;
    }
}