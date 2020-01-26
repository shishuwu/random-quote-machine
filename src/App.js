import React from 'react';
import './App.css';

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
        <button id="new-quote">New quote</button>
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
  return (
    <div className="App">
      <h3>Random Quote Machine</h3>
      <QuoteBox />
    </div>
  );
}

export default App;
