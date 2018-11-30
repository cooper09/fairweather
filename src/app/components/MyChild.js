import React from "react";

export class MyChild extends React.Component {
	
	//manage external props
	constructor(props){
		super();
		this.state = {
			name: props.initialName,
			newName: "Big Bertha"
		}
	}//end constructor

	clickMe() {
		this.setState({
			name: "Roberto"
		});
		console.log("I have been clicked, baby: ", this.state );
	}

	onChangeName() {
		this.props.changeName(this.state.newName);
	}

	render() {
		let hello = "hello there!";

		return (
			<div>
				<h3 className='special'>My First Component</h3>

				<p>{ this.state.name }</p>
				
				<button onClick={this.clickMe.bind(this)}>Click Me!</button>
				<br/><br/>
				<button onClick={this.props.parentGreeting}>Greetings from Parent</button>
				<br/><br/>
				<button onClick={this.onChangeName.bind(this)}>Change Second Child Name</button>
			</div>
			);
		}
}

MyChild.propTypes = {
	name: React.PropTypes.string,
	parentGreeting: React.PropTypes.func
};