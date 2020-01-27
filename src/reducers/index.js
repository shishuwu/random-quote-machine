import randomR from "./randomR";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    randomR: randomR,
});

export default allReducers;