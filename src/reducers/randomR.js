import { RANDOM } from "../actions/actions";

// REDUCER
const randomR = (state = 0, action) => {
    switch (action.type) {
        case RANDOM:
            let r = Math.floor((Math.random() * action.payload) + 1);
            if (r <= 0) {
                return 0;
            } else {
                return r - 1;
            }
        default:
            return state;
    }

}

export default randomR;