import React, { Component } from 'react';
import '../styles/CurrentWeather.css'

class DayDetails extends Component {

  render() {
    return (
      <div className="day-details-cont">
        <p>{this.props.time}:00</p>
        <p>{parseInt(this.props.temperature)}°C </p>
          <img src={this.props.icon} height="22px"></img>
        <p>{this.props.description}  </p>


      </div>
    );
  }

}

export default DayDetails;
