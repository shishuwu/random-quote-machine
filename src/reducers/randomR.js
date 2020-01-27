import { RANDOM } from "../actions";

// REDUCER
const randomR = (state = 0, action) => {
    switch (action.type) {
        case RANDOM:
            return Math.floor((Math.random() * action.payload) + 1);
        default:
            return state;
    }

}


export default randomR;