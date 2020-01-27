import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { random } from './actions';

class QuoteArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'abc',
      author: 'jason'
    }
  }

  render() {
    return (
      <div id="quote-area">
        <div id="text">{this.state.text}</div>
        <div id="author">{this.state.author}</div>
      </div>
    );
  }
}

class ButtonArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="button-area">
        <button id="tweet-quote">tweet</button>
        <button id="new-quote" onClick={() => { }}>New quote</button>
      </div>
    );
  }
}



class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="quote-box">
        <QuoteArea />
        <ButtonArea />
      </div>
    );
  }
}


function App() {
  const randomR = useSelector(state => state.randomR);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h3>Random Quote Machine</h3>
      <h4>Random number: {randomR} </h4>
      <button onClick={() => { dispatch(random(100)) }}>click</button>
      <QuoteBox />
    </div>
  );
}

export default App;
