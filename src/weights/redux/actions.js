
export const REMOVE_WEIGHT = 'REMOVE_WEIGHT';
export const removeWeight = text => ({
    type: REMOVE_WEIGHT,
    payload: { text },
});

export const CREATE_WEIGHT = 'CREATE_WEIGHT';
export const createWeight = text => ({
    type: CREATE_WEIGHT,
    payload: { text }
})