import React, { Component } from 'react';
import '../styles/CurrentWeather.css'

class CurrentWeather extends Component {

  convertUnix = (timeStamp, adjust) => {
    var tryIt = new Date();
    var offSet = (tryIt.getTimezoneOffset())*60;
    var converted = new Date((timeStamp + offSet + adjust) * 1000);
    var hours = converted.getHours();
    var minutes = converted.getMinutes();
    if (minutes < 10) {
      minutes = ('0' + minutes).slice(-2)
    }

    return `${hours}:${minutes}`
      }



  render() {
    const { temperature, description, imageSRC, city, country, show, sunrise, sunset } = this.props;



    if (show) {
      return (
        <div className="cwContainer">
          <h1 className="cwContainer">{city}, {country} </h1>
          <div className="suriseCont">
            <img className="" src="./images/sunrise.png" height="20px"  ></img>
              <p><strong> {this.convertUnix(this.props.sunrise, this.props.timezone)}</strong>{this.convertUnix(this.props.sunset, this.props.timezone)} </p>
          </div>
          <div className="mainData">
            <img className="weatherIconMain" src={imageSRC} height="100px"  ></img>
            <div className="mainDataText">
              <h1>{temperature}°C</h1>
              <h2>{description}</h2>
            </div>
          </div>
        </div>
      );

    }
    return(
      null
    )


  }

}



export default CurrentWeather;
