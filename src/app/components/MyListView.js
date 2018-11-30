import React from "react";

export class MyListView extends React.Component {
	
	//manage external props
	constructor(props){
		super();
	}//end constructor

	render() {

		return (
			<div>
				<h3 className=''>My ListView Component</h3>
			</div>
			);
		}
}

MyListView.propTypes = {
	
};