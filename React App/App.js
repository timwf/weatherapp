
import React, { Component } from 'react';
import SearchBar from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import './styles/CurrentWeather.css'
import GetFiveDay from "./components/GetFiveDays";

const keyAPI = "579e2e8de9afb7bf477ddac974c208f8";


//get location

let lat;
let long;
function GetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

function showPosition(position) {
lat = position.coords.latitude;
long = position.coords.longitude;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      searchLocation: "",
      items: [],
      temp: "",
      show: false,
      changeToggle : false
    }
  }



  doASearch = (e, location) => {
    console.log("changes");
    console.log(this.state.visib);
    e.preventDefault();
    let apiString = ""
    location ? apiString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${keyAPI}`
    : apiString = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchLocation}&units=metric&appid=${keyAPI}`
    fetch(apiString)
    .then(res => res.json())
    .then(
      (result) => {

          this.setState({
          items: result,
          name: result.name,
          temp: parseInt(result.main.temp),
          description: result.weather[0].description,
          icon: result.weather[0].icon,
          country: result.sys.country,
          show: true,
          sunrise: result.sys.sunrise,
          sunset: result.sys.sunset,
          timezone: result.timezone,
          changeToggle : !this.state.changeToggle
        });
      })
      .catch(() => {
      alert(`${this.state.searchLocation} is not a valid place`)
    });
}

searchValue = (e) => {

  this.setState({
    searchLocation: e.target.value,
    show: false
  })
}




render() {
  const wrapper = {
    backgroundImage: `url(./images/bg${this.state.icon}.png)`,
    margin: "0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: "400px",
    margin: "auto"
  }
GetLocation();
    return (
      <div className="app-cont">
      <div style={wrapper}>
        <div className="overlay">
        <div style={inner}>

        <SearchBar searchHandler={this.doASearch} searchValue={this.searchValue} findLocation={this.findLocation}/>
        <CurrentWeather
          temperature={this.state.temp}
          description = {this.state.description}
          imageSRC = {`./images/${this.state.icon}.png`}
          city = {this.state.name}
          country = {this.state.country}
          show={this.state.show}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          timezone={this.state.timezone}
        />

        </div>
      </div>

      </div>
        <GetFiveDay name = {this.state.name} show = {this.state.show} changeToggle={this.state.changeToggle}/>
    </div>


    );
  }

}



const inner = {
  textAlign: "center"
}

export default App;
