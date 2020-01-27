import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import allReducers from './reducers';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

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


// STORE - GLOBALIZED STATE


let store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Display it in the console
//store.subscribe(() => console.log(store.getState()));

// DISPATCH
// store.dispatch(random(1));
// store.dispatch(random(100));
// store.dispatch(random(1000));



ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
