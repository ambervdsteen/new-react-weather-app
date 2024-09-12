import React, {useState} from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherData from './WeatherData'
import WeatherForecast from './WeatherForecast'

function Weather({defaultCity}){
    const [weather, setWeather] = useState({ready:false});
    const [city, setCity]=useState(defaultCity);
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

    function search(){
        const apiKey="2950072abb4303db56f019dto24c1aca";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    
       axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault()
        search()
    }

    function handleChangeCity(event){
       setCity(event.target.value);
    }

   if (weather.ready){
    return (
    <div className="Weather">    
<form className="mb-3" onSubmit={handleSubmit}>
<div className="row">
    <div className="col-9">
    <input type="search" placeholder="search for your city" className="searchBar w-100" autoFocus="on" onChange={handleChangeCity}/></div>
    <div className="col-3">
    <input type="submit" className="btn btn-dark w-100"/></div>
    </div>
</form>
     <WeatherData data={weather}/>
     <WeatherForecast />
       </div>
    ); 
} else {
    search();
    return "Ready in just a few seconds"
}}

export default Weather;