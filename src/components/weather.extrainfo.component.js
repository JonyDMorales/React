import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <h5> Humedad: <small>{humidity}% </small> </h5>
        <h5> Vientos: <small>{wind} </small> </h5>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;

