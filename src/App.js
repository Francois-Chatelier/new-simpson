import './App.css';
import React from 'react'
import QuoteCard from './components/QuoteCard.js';
import axios from "axios";


function App() {
  const [simpson, setSimpson] = React.useState();
 
  const getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then((response) => response.data)
    .then((data) => {
      setSimpson(data.results(QuoteCard));
    })
  }

  return (
    <div className='App'>
      <QuoteCard simpson={simpson} />
      <button type="button" onClick={getQuote}>Clique</button>

    </div>
  );
}

export default App;
