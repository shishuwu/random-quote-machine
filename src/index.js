import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,useDispatch, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// STORE - GLOBALIZED STATE



// Display it in the console
//store.subscribe(() => console.log(store.getState()));

// DISPATCH
// store.dispatch(random(1));
// store.dispatch(random(100));
// store.dispatch(random(1000));

// constant
class Quote {
    constructor(author, text) {
        this.author = author;
        this.text = text;
    }

    toString() {
        return "\"" + this.text + "\" " + this.author + " \#quotes"
    }
}

const quotes = [
    new Quote('Jason', "Hello world"),
    new Quote('Maggie', 'Hey there'),
    new Quote('Ben', 'Smile is the best cure ;-)')
]

const RANDOM = 'RANDOM';
const randomA = (scope) => {
    return {
        type: RANDOM,
        payload: scope
    }
}

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



// component
function QuoteArea() {
    const randomR = useSelector(state => state.randomR);

    return (
        <div id="quote-area">
            <div id="author">{quotes[randomR].text}</div>
            <div id="text">-{quotes[randomR].author}</div>
        </div>
    )
}

function ButtonArea() {
    const dispatch = useDispatch();

    const randomR = useSelector(state => state.randomR);

    return (
        <div id="button-area">
            <a class="btn btn-warning" role="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href={"https://twitter.com/intent/tweet?text=" + quotes[randomR].toString()}>tweet</a>
            <button class="btn btn-info" id="new-quote" onClick={() => { dispatch(randomA(quotes.length)) }}>New quote</button>
        </div >
    )
}

function QuoteBox() {
    return (
        <div id="quote-box" class="card" style={{ width: '18rem;' }}>
            <div class="card-body">
                <QuoteArea />
                <ButtonArea />
            </div>
        </div>
    )
}

function App() {
    const randomR = useSelector(state => state.randomR);

    return (
        <div className="App">
            <h3>Random Quote Machine</h3>
            <h4>Random number: {randomR} </h4>
            <QuoteBox />
        </div>
    );
}

const allReducers = combineReducers({
    randomR: randomR,
});


let store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
