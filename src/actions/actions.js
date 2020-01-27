// ACTION
export const RANDOM = 'RANDOM';

export const randomA = (scope) => {
    return {
        type: RANDOM,
        payload: scope
    }
}