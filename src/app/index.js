
import React from "react";
import { render } from "react-dom";

//import { axios }   from "axios";

import { MyChild } from "./components/MyChild";
import { SecondChild } from "./components/SecondChild";
//import { getLocalData } from "../utils/getLocalAPI";
import { MyListView } from "./components/MyListView";

class App extends React.Component {

	constructor(props){
		super();
		this.state = {
			lat:0,
			long:0
		}
	}//end constructor

	getLocation() {
		console.log("we are at ground zero");
		navigator.geolocation.getCurrentPosition(
			function success(position) {
				var lat, long;
			  // for when getting location is a success
			  console.log('latitude', position.coords.latitude, 
						  'longitude', position.coords.longitude);


			//this.setState({ lat : position.coords.latitude, long: position.coords.longitude });
			});
	}

	componentDidMount() {
        //this.getLocation();
      }

	render() {
		console.log("lat: ", this.state.lat );

		return (
			<div className="container">
						
				<h1>Fair Weather Friend</h1>
				<button onClick={getLocation.bind(this)}>Where you are</button>	
				<button>Where you wanna be</button>			
			</div>
			)

			function getLocation() {
				console.log("we are at ground zero");
				navigator.geolocation.getCurrentPosition(
					function success(position) {
						var lat, long;
					  // for when getting location is a success
					  console.log('latitude', position.coords.latitude, 
								  'longitude', position.coords.longitude);
						//call API for goodies

					});
			}
	}//end render
}//end App class

render(<App/>, window.document.getElementById("app"));