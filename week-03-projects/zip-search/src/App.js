import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function City(props) {
  return (<div></div>);
}

function ZipSearchField(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Try 11420"
        onChange={props.onChange}
       />
    </div>
    );
}




class App extends Component {
  // function
  onZipSearchFieldChange = (event) => {
   // console.log("hi");
   const zipcode = event.target.value;
   // http://ctp-zip-api.herokuapp.com/zip/:zipcode
   fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
    .then( response => {
      console.log("Response")
      if(response.ok){
        return response.json();
      }
    })
    .then(cities =>{
      console.log(cities);
    })
    .catch(error => {
      console.log('Error:' , error);
    })
  }
  // Can change line 37 to {event {this.zip}}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        {/* <ZipSearchField onChange={this.onZipSearchFieldChange}/>   */}
        <ZipSearchField onChange={ (event) => this.onZipSearchFieldChange(event)}/> 
        <div>
          <City />
          <City />
        </div>
      </div>
    );
  }
}

export default App;
