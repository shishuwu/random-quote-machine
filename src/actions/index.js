// ACTION
export const RANDOM = 'RANDOM';

export const random = (scope) => {
    return {
        type: RANDOM,
        payload: scope
    }
}