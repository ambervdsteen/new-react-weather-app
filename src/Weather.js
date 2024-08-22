import React from 'react';
import './Weather.css';

function Weather(){
    return (
       <div className="Weather">

      
      
<form className="mb-3">
<div className="row">
    <div className="col-9">
    <input type="search" placeholder="search for your city" className="searchBar w-100" autoFocus="on"/></div>
    <div className="col-3">
    <input type="submit" className="btn btn-dark w-100"/></div>
    </div>
</form>
        <div className="row">
<div className="col-9">
<ul>
    <li>Date Thursday 22nd of August, 2024</li>
    <li>Description Sunny with scattered clouds</li>
</ul>
</div>
<div className="col-3">
<ul>
    <li>15% precipitation</li>
    <li>65% humidity</li>
    <li>10 km/h wind</li>
</ul>
</div>

<div className="YourCity mt-3" >
    
        <h1>City BARCELONA</h1>
        <h2>Current Temperature 26°C</h2>
        <div className="WeatherIcon">icon</div>

</div>

        </div>
     
       </div>
    )
}

export default Weather;