import {startCalculation, writeOptimal, writeToState} from "./actions";


export const writeBaseCases = (dispatch, weights, goal) => {
    dispatch(startCalculation(weights, goal));
    dispatch(writeToState(0,0, true))
}

export const findOptimalSolution = (dispatch, weights, goal) => {
    writeBaseCases(dispatch, weights, goal)
    for (let targetWeight = 0; targetWeight < goal * 2; targetWeight++) {
        for (let noOfWeights = 1; noOfWeights < weights.length; noOfWeights++) {
            dispatch(writeOptimal(noOfWeights, targetWeight, weights))
        }
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}