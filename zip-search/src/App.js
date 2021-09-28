import React, { Component } from 'react';
import './App.css';


function City(props) {
  if(props.city === undefined)
  return;
return (
<div className="city-container">
<div className = "header">{props.city.City}</div>
<div className = "content">
    <ul>
      <li>State: {props.city.State}</li>
      <li>Location: {props.city.Location}</li>
      <li>Population: {props.city.EstimatedPopulation}</li>
      <li>Total Wages: {props.city.TotalWages}</li>
    </ul>
  </div>
</div>
   );
}

function ZipSearchField(props) {
  const handleInputChange = (value)=>{
    if(value === undefined)
    return;
    if(value.length > 4){
    fetch(`https://ctp-zip-api.herokuapp.com/zip/${value}`)
    .then(function (res) { return res.json(); })
    .then(function (json) { props.saveCities(json);console.log(json); })
    // .then(response => response.json())
    // .then(cities => props.saveCities(cities))
   
    //console.log(value);alert(JSON.stringify(cities))
    //this.props.saveCities(cities);
    
  }}


  return (<div className="zip-input">
  <b>Zip Code:</b>
  <input onChange={(event) => handleInputChange(event.target.value)}/>
  </div>);
}


class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      cities:[]
    }
  }
  // saveCities(cities){
  //   this.setState((cities) =>{
  //     return {cities:this.state.cities}
  //   });
  //  // console.log(cities)
  // }
  saveCities = (cities)=>{
    
    this.setState({cities})
   // console.log(cities);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <ZipSearchField saveCities={this.saveCities}/>
        <div>
          {this.state.cities.length ? <City city = {this.state.cities[0]}/>:<div>No Results</div>}
          {this.state.cities.length ? <City city = {this.state.cities[0]}/>:<div>No Results</div>}
          {this.state.cities.length ? <City city = {this.state.cities[0]}/>:<div>No Results</div>}
          
        </div>
      </div>
    );
  }
}

export default App;
