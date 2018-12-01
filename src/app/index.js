
import React from "react";
import { render } from "react-dom";

import  axios from "axios";

import { MyChild } from "./components/MyChild";
import { SecondChild } from "./components/SecondChild";
import { MyListView } from "./components/MyListView";

import { LocalScrn } from "./components/Local";
import { AwayScrn } from "./components/Away";

class App extends React.Component {

	constructor(props){
		super();
		this.state = {
			local:true,
			away:false
		}
	}//end constructor

	componentDidMount() {
        //this.getLocation();
      }

	render() {
		var local = true;
		var away = false;

		return (
			<div className="container">
						
				<h1>Fair Weather Friend</h1>
				<button onClick={getLocation.bind(this)}>Where you are</button>	
				<button onClick={getAway.bind(this)}>Where you wanna be</button>	

				<LocalScrn visible={this.state.local} />
				<AwayScrn visible={this.state.away}/>		
			</div>
			)

			function getAway() {
				console.log("And the boyz from Brazil??");
				this.setState({  local: false, away: true });
			}//end getAway

			function getLocation() {
				console.log("we are at ground zero");
				
				navigator.geolocation.getCurrentPosition(
					function success(position) {
						var lat, long;
					  // for when getting location is a success
					  console.log('latitude', position.coords.latitude, 
								  'longitude', position.coords.longitude);
						//call API for goodies
					var coordObj = {
						"latitude" : position.coords.latitude,
						"longitude" : position.coords.longitude
					}

					getLocalData(coordObj).then (
						(data) => {
							console.log("Heres our data: ", data );
						
						}
					  )
					});//end geolocation

				this.setState({  local: true, away: false });
					
			}//end getLocation


function getLocalData(coords) {
  console.log('getLocalData: ', coords );
  const lat = coords.latitude;
  const long = coords.longitude;

  const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=b0dc9601e28c24ab8329f0055b9b5a2b';
  const url = `${BASE_URL}` ;
  //console.log('Dirt Cheap: ', axios.get(url).then(response => response.data) )
  return axios.get(url).then(response => response.data);
}
			
	}//end render
}//end App class

render(<App/>, window.document.getElementById("app"));