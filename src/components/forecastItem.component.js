import React from 'react';
import WeatherData from './weather.data.component';

var ForecastItem = ({ weekDay, hour, data }) => {
    
    return( 
        <div className="card marco">
            <h4> { weekDay } <small> { hour } </small> </h4>
            <WeatherData data={ data }/>
        </div>
    );
}

export default ForecastItem;