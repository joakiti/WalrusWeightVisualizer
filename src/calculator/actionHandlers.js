import {startCalculation, writeOptimal, writeToState} from "./actions";


export const writeBaseCases = (dispatch, weights, goal) => {
    dispatch(startCalculation(weights, goal));
    for (let i = 0; i < goal * 2; i++) {
        //Using the first I weights, is it possible to obtain 0 kilos? //Yes, by simply not using it.
        dispatch(writeToState(0, i, false))
    }
    dispatch(writeToState(0,0, true))
}

export const findOptimalSolution = (dispatch, weights, goal) => {
    writeBaseCases(dispatch, weights, goal)
    for (let targetWeight = 0; targetWeight < goal * 2; targetWeight++) {
        for (let noOfWeights = 1; noOfWeights < weights.length + 1; noOfWeights++) {
            dispatch(writeOptimal(noOfWeights, targetWeight, weights))
        }
    }
}