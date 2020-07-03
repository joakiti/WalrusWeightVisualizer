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
                //Using the first I weights, is it possible to obtain 0 kilos? //Yes, by simply not using it.
                x[0][i] = false;
            }
            x[0][0] = true;
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