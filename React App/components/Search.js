import React, { Component } from 'react';
import '../styles/CurrentWeather.css'

class SearchBar extends Component {

  dontRef = (e) => {
    e.preventDefault();
  }

  render() {
    let location = true;
    return (
      <div>
        <form onSubmit={this.dontRef}className="locationForm">
          <input onChange={this.props.searchValue} type="text" placeholder="Search Location"></input>
          <div className="serchIcons">
            <i onClick={this.props.searchHandler} className="fas fa-search fa-2x"></i>
            <i onClick={(e)=>this.props.searchHandler(e, location)} className="fas fa-map-marker-alt fa-2x"></i>

          </div>




        </form>

      </div>
    );
  }

}

export default SearchBar;
