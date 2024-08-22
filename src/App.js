import React from 'react';
import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
        <footer> this page was coded by 
        <a
          className="App-link"
          href="https://github.com/ambervdsteen/new-react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        > Amber van der Steen      
        </a>  </footer>
 
      </div>
    </div>
  );
}

export default App;
