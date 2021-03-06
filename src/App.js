import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "0732a0e505d94621762381e39a11559a";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
           }
           this.getWeather = this.getWeather.bind(this)
    }
   
    


    getWeather = async (e) => { //need to call event (e) in order to use in underneath
        e.preventDefault(); //prevents from refreshing the page
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country){
    console.log(data);
    this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
    });
    } 
    else {
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the value."
        });
    }
    }
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                />
            </div>
        );
    }
}



export default App;