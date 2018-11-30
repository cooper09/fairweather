import React from "react";

export class SecondChild extends React.Component {
	render() {
		let hello = "";

		return (
			<div>
				<h3 className='special'>My Second Component</h3>
				<p>{ this.props.name }</p>
			</div>
			);
		}
}