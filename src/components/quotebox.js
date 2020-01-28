import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomA } from '../actions/actions';
import { quotes, Quote } from '../constant/constant';
import 'bootstrap/dist/css/bootstrap.min.css'

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

export default QuoteBox;
