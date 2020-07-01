import {START_CALCULATION, WRITE_OPTIMAL} from './actions';

export const calculator = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case START_CALCULATION: {
            const {weights, goal} = payload;
            console.log("Starting calculation")
            let x = new Array(weights + 1);
            for (let i = 0; i <= weights.length; i++) {
                x[i] = new Array(goal * 2)
            }
            for (let i = 0; i < goal * 2; i++) {
                //Using the first I weights, is it possible to obtain 0 kilos?
                x[0][i] = false;
            }
            return x;
        }
        case WRITE_OPTIMAL: {
            const {noOfWeights, targetWeight, weights} = payload;
            x[noOfWeights][targetWeight] = x[noOfWeights - 1][targetWeight] || x[noOfWeights-1][targetWeight-weights[noOfWeights]]
            return x;
        }
        default:
            return state;
    }
}