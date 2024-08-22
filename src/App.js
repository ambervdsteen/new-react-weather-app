import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="Weather App">   </header>
      <h2>Welcome to the weather app</h2>
      <h3>check out the weather in your city</h3>
     
        <footer> this page was coded by 
        <a
          className="App-link"
          href="https://github.com/ambervdsteen/new-react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        > Amber van der Steen      
        </a>  </footer>
        <p className="btn btn-primary">click here</p>
   
      </div>
    </div>
  );
}

export default App;
