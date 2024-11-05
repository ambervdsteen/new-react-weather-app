import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherForecastDaily({data}){
    function maxTemperature(){
        let temperature = Math.round(data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(data.temperature.minimum);
        return `${temperature}°`;
    }

    function day (){
        let date = new Date (data.time*1000);
        let day  = date.getDay();

        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];    }

    return(
        <div>
        <div className="forecastDay">{day()}</div>
        <div className="iconForecast"> <WeatherIcon code={data.condition.icon} size={32}/></div>
         <div className="forecastTemps">
          <span className="forecastTempMax">    {maxTemperature()}</span>
     
          <span className="forecastTempMin">{minTemperature()}</span>
          </div> 
          </div>
    )
}

export default WeatherForecastDaily;