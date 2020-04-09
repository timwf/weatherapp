import React, { Component } from 'react';
import '../styles/CurrentWeather.css'

class DayHeader extends Component {

  render() {
    return (
      <div><h2 className="day-header">{this.props.day}</h2></div>
    );
  }

}

export default DayHeader;
