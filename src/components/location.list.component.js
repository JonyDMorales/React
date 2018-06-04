import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './weather.component';

const LocationList = ({ cities, onselectedLocation }) => {
    const handleWeatherClick = city => {
        onselectedLocation(city);
    };
    const strToComponent = cities => (
        cities.map( city => (<WeatherLocation key={ city } city={ city } onWeatherClick={ () => handleWeatherClick(city) }/>) )
    );
    return (
        <div>
            {strToComponent(cities)}
        </div>
    );
};

LocationList.prototype = {
    cities: PropTypes.array.isRequired
};

export default LocationList;