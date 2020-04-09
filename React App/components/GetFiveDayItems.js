import React, { Component } from 'react';
import '../styles/CurrentWeather.css'
import DayHeader from "./dayHeader.js";
import DayDetails from "./DayDetails.js";


let itemsByHour={}
let check
class GetFiveDayItems extends Component {
  constructor(props){
    super(props);
    this.state ={
      temperature: this.props.temperature,
      description: this.props.description
    }
  }

  convertUnix = (timeStamp, adjust, iconGot) => {
    var tryIt = new Date();
    var offSet = (tryIt.getTimezoneOffset())*60;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var converted = new Date((timeStamp + offSet + adjust) * 1000);
    var day = converted.getDay();
    var dateDay = converted.getDate();
    var hours = converted.getHours();
    var dayOfWeek = days[day];
    this.setState({
      day: dayOfWeek,
      time: hours,
      temperature: this.props.temperature,
      description: this.props.description,
      icon: `./images/${iconGot}.png`
      });
      }

      componentDidMount(){
        this.convertUnix(this.props.timeStamp, this.props.timeAdjust, this.props.item.weather[0].icon)
      }

  componentDidUpdate(prevProps){
    console.log();
    if (this.props.temperature !== prevProps.temperature) {
      console.log("works");
       this.convertUnix(this.props.timeStamp, this.props.timeAdjust, this.props.item.weather[0].icon)
   }
      }

  render() {


    if (this.state.day != "") {
      if (this.state.day != check) {
        check = this.state.day;
      return(
        <div>
        <DayHeader day={check}/>
        <div className="itemFiveCont">

          <DayDetails
            time={this.state.time}
            temperature = {this.state.temperature}
            description = {this.state.description}
            icon = {this.state.icon}
          />
        </div>
      </div>

      )
      }
    }

    return (

      <div className="itemFiveCont">

        <DayDetails
          time={this.state.time}
          temperature = {this.state.temperature}
          description = {this.state.description}
          icon = {this.state.icon}
        />
      </div>

    );
  }

}

export default GetFiveDayItems;
