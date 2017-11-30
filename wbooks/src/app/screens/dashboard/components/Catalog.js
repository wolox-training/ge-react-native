import React, {Component} from 'react';

class Catalog extends Component {
	constructor(props){
		super(props);
		this.state={filters:props.filters}
	}
	render(){
		return (
			<div>
			{JSON.stringify(this.state.filters)}
			</div>
			);
	}
}

export default Catalog;