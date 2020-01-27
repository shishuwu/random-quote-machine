import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomA } from '../actions/actions';
import { quotes } from '../constant/constant';


function QuoteArea() {
    const randomR = useSelector(state => state.randomR);
  
    return (
      <div id="quote-area">
        <div id="text">{quotes[randomR].author}</div>
        <div id="author">{quotes[randomR].text}</div>
      </div>
    )
  }
  
  function ButtonArea() {
    const dispatch = useDispatch();
  
    return (
      <div id="button-area">
        <button id="tweet-quote">tweet</button>
        <button id="new-quote" onClick={() => { dispatch(randomA(quotes.length)) }}>New quote</button>
      </div>
    )
  }
  
  function QuoteBox() {
    return (
      <div id="quote-box">
        <QuoteArea />
        <ButtonArea />
      </div>
    )
  }

  export default QuoteBox;
