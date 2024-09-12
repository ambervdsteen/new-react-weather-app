import React from 'react';
import DateFormat from './DateFormat'
import TemperatureData from './TemperatureData'
import WeatherIcon from './WeatherIcon'

function WeatherData({data}){
    return (
        <div className="WeatherData">
               <div className="row">
<div className="col-9">
<ul>
    <li><DateFormat date={data.date}/> </li>
    <li className="text-capitalize">{data.description}</li>
</ul>
</div>
<div className="col-3">
<ul>
    <li>Feels like {Math.round(data.feels_like)}°C</li>
    <li>{data.humidity}% humidity</li>
    <li>{data.wind} km/h wind</li>
</ul>
</div>

<div className="YourCity mt-3" >
    
        <h1>{data.city}</h1>
    <TemperatureData celsius={data.temperature}/>

<WeatherIcon code={data.icon} alt={data.description}/>
      

</div>

        </div>

        </div>
    );
}

export default WeatherData;