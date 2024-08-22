import React, {useState} from 'react';
import './Weather.css';
import DateFormat from './DateFormat'
import axios from 'axios';

function Weather({defaultCity}){
    const [weather, setWeather] = useState({ready:false});
    function handleResponse(response){
        setWeather({
            ready:true,
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon,
            feels_like: response.data.temperature.feels_like,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
        })
    }

   if (weather.ready){
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
    <li><DateFormat date={weather.date}/> </li>
    <li className="text-capitalize">{weather.description}</li>
</ul>
</div>
<div className="col-3">
<ul>
    <li>Feels like {Math.round(weather.feels_like)}°C</li>
    <li>{weather.humidity}% humidity</li>
    <li>{weather.wind} km/h wind</li>
</ul>
</div>

<div className="YourCity mt-3" >
    
        <h1>{weather.city}</h1>
        <h2>{Math.round(weather.temperature)}°C</h2>
        <div className="WeatherIcon">{weather.icon}
        </div>

</div>

        </div>
     
       </div>
    ); 
} else {
    const apiKey="2950072abb4303db56f019dto24c1aca";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=metric`

   axios.get(apiUrl).then(handleResponse);
    return "Ready in just a few seconds"
}}

export default Weather;