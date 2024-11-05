import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

function WeatherIcon ({code, size}){
    const codeMapping = {
        "clear-sky-day":"CLEAR_DAY",
        "clear-sky-night":"CLEAR_NIGHT",
        "few-clouds-day":"PARTLY_CLOUDY_DAY",
        "few-clouds-night":"PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day":"CLOUDY",
        "scattered-clouds-night":"CLOUDY",
        "broken-clouds-day":"PARTLY_CLOUDY_DAY",
        "broken-clouds-night":"few-clouds-night",
        "shower-rain-day":"RAIN",
        "shower-rain-night":"RAIN",
        "rain-day":"RAIN",
        "rain-night":"RAIN",
        "thunderstorm-day":"SLEET",
        "thunderstorm-night":"SLEET",
        "snow-day":"SNOW",
        "snow-night":"SNOW",
        "mist-day":"FOG",
        "mist-night":"FOG"
    }

    return (
        <ReactAnimatedWeather
        icon={codeMapping[code]}
        color="black"
        size={[size]}
        animate={true}
      />
    )
}

export default WeatherIcon;