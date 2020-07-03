
export const REMOVE_WEIGHT = 'REMOVE_WEIGHT';
export const removeWeight = weight => ({
    type: REMOVE_WEIGHT,
    payload: { weight },
});

export const CREATE_WEIGHT = 'CREATE_WEIGHT';
export const createWeight = weight => ({
    type: CREATE_WEIGHT,
    payload: { weight }
})