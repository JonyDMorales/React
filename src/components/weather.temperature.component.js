import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const getWeatherIcon = ( weatherState ) => {
    var icon = '';
    switch (weatherState) {
        case 'cloud':
            icon = 'cloud';
        break;
        case 'cloudy':
            icon = 'cloudy';
        break;
        case 'sun':
            icon = 'day-sunny';
        break;
        case 'rain':
            icon = 'rain';
        break;
        case 'snow':
            icon = 'snow';
        break;
        case 'windy':
            icon = 'windy';
        break;
        case 'thunder':
            icon = 'day-thunderstorm';
        break;
        case 'drizzle':
            icon = 'day-showers';
        break;

        default:
            icon = 'day-sunny';
        break;
    }
    return icon;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="text-center">
        <h5> { temperature } °C </h5>
        <WeatherIcons name={getWeatherIcon(weatherState)} size="3x"/>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTemperature;