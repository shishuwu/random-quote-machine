import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import QuoteBox from './components/quotebox';



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

export default App;
