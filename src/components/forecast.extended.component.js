import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecastItem.component';
import CircularProgress from '@material-ui/core/CircularProgress';
import momento from 'moment';

var key = 'b45114abc0d90b5200a9ccb0233636cd';
var data = null;

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    transformData(weather_data){
        weather_data.list.filter( item => (
            momento.unix(item.dt).utc().hour()  === 6 ||
            momento.unix(item.dt).utc().hour()  === 12 ||
            momento.unix(item.dt).utc().hour()  === 18
        )).map( item => (
            {
                weekDay: momento.unix(item.dt).format('ddd'),
                hour: momento.unix(item.dt).hour(),
                data: {
                    temperature: 0,
                    humidity: 0,
                    weatherState: '',
                    wind: ''
                }
            }
        ));
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.city !== this.props.city ){
            this.setState({ forecastData: null });
            this.updateCity( this.props.city );
        }
    }
    

    updateCity = city => {
        var api_weather = `http://api.openweathermap.org/data/2.5/forecast?q=${ this.props.city }&appid=${ key }`;
        fetch(api_weather).then( data => {
             return data.json()
        }).then( weather_data => {
            var data = this.transformData( weather_data );
            console.log(data);
            this.setState({ forecastData: data })
        });
    }

    componentDidMount() {
        this.updateCity( this.props.city );
    }
    

    forecastDays(){
        var days = ['Lunes', 'Martes', 'Miercoles'];
        return days.map( day => <ForecastItem key={ day } weekDay={ day } data={ data } hour={'10:00 am'} /> );
    }

    render () {
        var city = this.props.city;
        var { forecastData } = this.state; 
        return ( 
            <div className="text-center"> 
                <h1> Durante la semana: </h1>
                <h2> { city } </h2> 
                { forecastData ?  this.forecastDays() : <CircularProgress  size={50} /> }
            </div> 
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;