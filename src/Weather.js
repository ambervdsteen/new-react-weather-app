import React from 'react';
import './Weather.css';

function Weather(){
    return (
       <div className="Weather">
      
<form>
<div className="row">
    <div className="col-9">
    <input type="search" placeholder="search for your city"/></div>
    <div className="col-3">
    <input type="submit" className="btn btn-dark"/></div>
    </div>
</form>
        <div className="row">
<div className="col-6">
<ul>
    <li>Date Thursday 22nd of August, 2024</li>
    <li>DescriptionSunny with scattered clouds</li>
</ul>
</div>
<div className="col-6">
<ul>
    <li>precipitation</li>
    <li>humidity</li>
    <li>wind</li>
</ul>
</div>

<div className="YourCity">
    
        <h1>City BARCELONA</h1>
        <h2>Current Temperature 26°C</h2>
        <div className="WeatherIcon">icon</div>

</div>

        </div>

       </div>
    )
}

export default Weather;