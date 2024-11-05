import React, {useState} from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDaily from './WeatherForecastDaily';

function WeatherForecast ({coordinates}){
    const [dataLoaded, setDataLoaded]=useState(false);
    const [forecastData, setForecastData]=useState(null);


    function handleResponse(response){
        setForecastData(response.data.daily);
        setDataLoaded(true);

     
    }
    if (dataLoaded){
        return (
            <div className="WeatherForecast"> 
                  <div className="row">
                    <div className="col">
                <WeatherForecastDaily data={forecastData[0]}/>
                </div>
            </div>
        </div>
    
        )}
        else{

        const apiKey="2950072abb4303db56f019dto24c1aca";
        let longitude=coordinates.longitude;
        let latitude=coordinates.latitude;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
 
       
        axios.get(apiUrl).then(handleResponse);
        return null;
}}

export default WeatherForecast;