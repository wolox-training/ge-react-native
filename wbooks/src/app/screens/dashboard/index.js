import React, {Component} from 'react';
import Catalog from './components/Catalog';
import Search from './components/Search';

class Dashboard extends Component {
	state = {textFilter: ''};
	
	updateFilters = (dropdownFilter, textFilter) => {
		this.setState({textFilter: textFilter});
		console.log("updatefilters::::", textFilter, dropdownFilter);
	}

	render(){
		return(
			<div className="dashboard">
				<Search updateFilters={this.updateFilters}/>
				<Catalog filters={this.state.filters}/>
			</div>
			);
	}
}



export default Dashboard;