import React from 'react';
import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Amsterdam"/>
        <footer> this page was coded by 
        <a
          className="App-link"
          href="https://github.com/ambervdsteen"
          target="_blank"
          rel="noopener noreferrer"
        > Amber van der Steen      
        </a> 
        , open-sourced on  
        <a 
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/ambervdsteen/new-react-weather-app"
         > Github</a>, and hosted on <a 
         href="https://shiny-gecko-7c750d.netlify.app/"
         target='_blank'
         rel="noopener noreferrer"
         >Netflify</a> </footer>
 
      </div>
    </div>
  );
}

export default App;
