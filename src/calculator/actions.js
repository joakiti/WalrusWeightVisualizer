export const START_CALCULATION = 'START_CALCULATION';
export const startCalculation = (weights, goal) => ({
    type: START_CALCULATION,
    payload: {
        weights: weights,
        goal: goal,
    },
});

export const WRITE_TO = 'WRITE_TO';
export const writeToState = (weight, targetWeight, value) => ({
    type: WRITE_TO,
    payload: {
        weight,
        targetWeight,
        value
    }
})

export const WRITE_OPTIMAL = 'WRITE_OPTIMAL';
export const writeOptimal = (noOfWeights, targetWeight, weights) => ({
    type: WRITE_OPTIMAL,
    payload: {
        noOfWeights: noOfWeights,
        targetWeight: targetWeight,
        weights: weights
    }
})