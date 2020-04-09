import React, { Component } from 'react';
import GetFiveDayItems from "./GetFiveDayItems.js";
import '../styles/CurrentWeather.css'

const keyAPI = "579e2e8de9afb7bf477ddac974c208f8";


class GetFiveDay extends Component {

  constructor(props){
    super(props);
    this.state ={
      list: []

    }
  }

  getFiveDaysFunc = (e) => {
    let apiString = `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.name}&units=metric&appid=${keyAPI}`;
    fetch(apiString)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        this.setState({
          list: result.list,
          date: result.list[0].dt_txt,
          timezone: result.city.timezone
        })

      })
      .catch(() => {
      console.log("error");
    });
}

componentDidUpdate(prevProps){
  console.log();
  if (this.props.changeToggle !== prevProps.changeToggle) {
    this.getFiveDaysFunc()
 }
    }

componentDidMount(){
  this.getFiveDaysFunc()
}

render() {
  console.log("hi " + this.props.changeToggle);
  if (this.props.show) {
    return(
      <div>

    {this.state.list.map((item, index) => (

      <div>
        <GetFiveDayItems
          item={item}
          temperature={item.main.temp}
          description={item.weather[0].description}
          timeStamp={item.dt}
          timeAdjust={this.state.timezone}

        />
      </div>

    ))}

    </div>)


    }
    return null
  }

}

export default GetFiveDay;
