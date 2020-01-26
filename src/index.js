import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';


// CONSTANT
const quotes = [
    {
        author: 'Jason',
        text: 'Hello world'
    },
    {
        author: 'Maggie',
        text: 'Hey there'
    }
]

const RANDOM = 'RANDOM';

// STORE - GLOBALIZED STATE


// ACTION
const random = (scope) => {
    return {
        type: RANDOM,
        payload: scope
    }
}

// REDUCER
const randomR = (state = 0, action) => {
    switch (action.type) {
        case RANDOM:
            return Math.floor((Math.random() * action.payload) + 1);
        default:
            return state;
    }

}

let store = createStore(randomR,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Display it in the console
//store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(random(1));
store.dispatch(random(100));
store.dispatch(random(1000));



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
