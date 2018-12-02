
import React from "react";
import { render } from "react-dom";

import  axios from "axios";

import { LocalScrn } from "./components/Local";
import { AwayScrn } from "./components/Away";
import { getLocalData } from "./utils/getLocalAPI";
import { getLondonData } from "./utils/getLondonAPI";
import { getDubaiData } from "./utils/getDubaiAPI";
import { getSingaporeData } from "./utils/getSingaporeAPI";

class App extends React.Component {

	constructor(props){
		super();
		this.state = {
			local:false,
			away:false,
			localData: [],
			londonData: [],
			dubaiData: [],
			singaporeData: []
		}
	}//end constructor

	getLocation() {
		getLocalData().then (
			(localData) => {
				console.log("Index.js - Our Local Data: ", localData );
				this.setState({localData})
			});

	}
	getLondon() {
		getLondonData().then (
			(londonData) => {
				console.log("Our London data: ", londonData );
				this.setState({londonData})
			});
			
	}
	getDubai() {
		getDubaiData().then (
			(dubaiData) => {
				console.log("Our Dubai Data: ", dubaiData );
				this.setState({dubaiData})
			});
	}
	getSingapore() {
		getSingaporeData().then (
			(singaporeData) => {
				console.log("Our Singapore Data: ", singaporeData );
				this.setState({singaporeData})
			});

	}


	componentDidMount() {
		this.getLocation();
		this.getLondon();
		this.getDubai();
		this.getSingapore();
	  }
	  

	render() {

		return (
			<div className="container">
						
				<h1>Fair Weather Friend</h1>
				<button onClick={getLocation.bind(this)}>Where you are</button>	
				<button onClick={getAway.bind(this)}>Where you wanna be</button>	

				<LocalScrn visible={this.state.local}  localData={this.state.localData} close={closeMe.bind(this) }/>
				<AwayScrn visible={this.state.away} londonData={this.state.londonData} dubaiData={this.state.dubaiData} singaporeData={this.state.singaporeData } close={closeMe.bind(this)}/>		
			</div>
			)

			function closeMe() {
				this.setState({  local: false, away: false });
			}
		
			function getAway() {
				console.log("And the boyz from Brazil??");
				this.setState({  local: false, away: true });
			}//end getAway

			function getLocation() {
				
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
			
	}//end render
}//end App class

render(<App/>, window.document.getElementById("app"));