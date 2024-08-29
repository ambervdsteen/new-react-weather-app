import React, {useState} from 'react';

function TemperatureData ({celsius}){
    const [unit, setUnit]=useState("metric");

function displayFahrenheit(event){
    event.preventDefault()
    setUnit("imperial")
}

function displayCelsius(event){
    event.preventDefault()
    setUnit("metric")
}

if (unit==="metric") {
    return(
        <div className="TemperatureData">
            <span>
        {Math.round(celsius)} </span> <span> °C / <a href='/' onClick={displayFahrenheit}> °F</a> </span>
        </div>
    )
} else {
    return(
        <div className="TemperatureData">
            <span>
        {Math.round((celsius*9/5)+32)} </span> <span> <a href='/' onClick={displayCelsius}> °C </a>/ °F </span>
        </div>
    )
  
      
}

 
}

export default TemperatureData;