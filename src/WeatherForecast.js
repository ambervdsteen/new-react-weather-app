import React from 'react';
import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import axios from 'axios';

function WeatherForecast ({coordinates}){

    function handleResponse(response){
       console.log(response.data)
        }
        const apiKey="2950072abb4303db56f019dto24c1aca";
        let longitude=coordinates.longitude;
        let latitude=coordinates.latitude;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
 
       
        axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast"> 
              <div className="row">
                 Fri 
           <WeatherIcon code={"scattered-clouds-day"} size={42}/>
            19/13 


        </div>

    </div>

    )
}

export default WeatherForecast;