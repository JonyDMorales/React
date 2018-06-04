import React, { Component } from 'react';
import LocationList from './components/location.list.component';
import ForecastExtended from './components/forecast.extended.component';
import './App.css';

var cities = [
    'Ciudad de México,mx',
    'Bogota,col',
    'Madrid,es',
    'España',
    'Londres',
    'Argentina'
];

class App extends Component {
    
    constructor(){
        super();
        this.state = { city: '' }
    }

    handleLocation = city => {
        this.setState({
            city: city
        });
    }

    render() {
        return ( 
            <div className = "App"> 
                <div className="row"> 
                    <div className="col-md-4"> <LocationList cities={ cities } onselectedLocation={ this.handleLocation }/> </div>
                    <div className="col-md-8"> <ForecastExtended city={ this.state.city }/></div>
                </div>
            </div> 
        );
    }
}

export default App;