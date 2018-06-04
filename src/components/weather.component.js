import React, { Component } from 'react';
import Location from './location.component';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherData from './weather.data.component';

var key = 'b45114abc0d90b5200a9ccb0233636cd';

class WeatherLocation extends Component {
    
    constructor({ city }){
        super();
        this.state = {
            city: city,
            data: null
        };
    }

    getWeatherState = weather =>{
        var { id } = weather[0];
        if (id < 300) {
            return 'thunder';
        } else if(id < 400){
            return 'drizzle';
        } else if(id < 600){
            return 'rain';
        } else if(id < 700){
            return 'snow';
        } else if(id === 800){
            return 'sun';
        } else {
            return 'cloudy';
        }
    }

    getData = weather_data => {
        var { weather } = weather_data;
        var { humidity, temp } = weather_data.main;
        var { speed } = weather_data.wind;
        var weatherState = this.getWeatherState(weather);

        var data =  {
            temperature: temp,
            weatherState,
            humidity,
            wind: `${ speed } m/s`
        };
        return data;
    }

    updateWether = () => {
        var { city } = this.state;
        var api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }&units=metric`;
        fetch(api_weather).then( data =>{
            return data.json();
        }).then( weather_data => {
            var info = this.getData( weather_data );
            this.setState({ data: info });
        });
    }

    componentWillMount(){
        this.updateWether()
    }

    render = () => {
        var { city, data } = this.state;
        var { onWeatherClick } = this.props;
        return (
            <div className="pad" onClick={ onWeatherClick }>
                <div className="card">
                    <div className="card-body">
                        <div> <Location city={ city }/> </div>
                        { data ? <div> <WeatherData data={ data } /> </div> : <CircularProgress  size={50} /> }
                    </div>
                </div>
            </div>
        );
    };
}

export default WeatherLocation;