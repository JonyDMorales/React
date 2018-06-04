import React from 'react';
import WeatherTemperature from './weather.temperature.component';
import WeatherExtraInfo from './weather.extrainfo.component';
import PropTypes from 'prop-types';

const WeatherData = ({ data }) => {
    var { temperature, weatherState, humidity, wind } = data;
    return (
        <div className="row">
            <div className="col-md-4">
                <WeatherTemperature temperature={ temperature } weatherState={ weatherState }/>
            </div>
            <div className="col-md-8">
                <WeatherExtraInfo humidity={ humidity } wind={ wind } ></WeatherExtraInfo>
            </div>
        </div>
    );
};

WeatherData.prototype = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default WeatherData;