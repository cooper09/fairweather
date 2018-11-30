
import React from "react";
import { render } from "react-dom";

import { MyChild } from "./components/MyChild"
import { SecondChild } from "./components/SecondChild"

import { MyListView } from "./components/MyListView"

class App extends React.Component {

	constructor(props){
		super();
		this.state = {
			secondChildName: "Gertrude"
		}
	}//end constructor
	
	parentGreeting(){
		alert("From the Parent");
	}

	onChangeChildName(newName) {
		this.setState({
			secondChildName: newName
		});	
	}
	render() {
		return (
			<div className="container">
						
				<h1>My React App</h1>
				<MyChild initialName={"Homer"}
					 parentGreeting={this.parentGreeting} changeName={this.onChangeChildName.bind(this)}/>
				<br/>
				<hr/>

				<SecondChild 
					name={this.state.secondChildName}/>

				<MyListView /> 
				
			</div>
			)
	}//end render
}//end App class

render(<App/>, window.document.getElementById("app"));