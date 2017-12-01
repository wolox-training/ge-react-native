import React, {Component} from 'react';

class Search extends Component {
  constructor(props){
    super();
    this.state = {updateFilters : props.updateFilters}
  }
  handleTextChange(e){
    this.setState({titleFilter: e.target.value})
    this.state.updateFilters(this.state.dropdownFilter, this.state.titleFilter);
  }
  render(){
    return (<div className="search">
      <select className="filter-dropdown">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <div className="filter-text">
        <input className="text-input" type="text" placeholder="Buscar..." onChange={this.handleTextChange.bind(this)}/>
        <button className="search-button"/>
      </div>
     </div>);
  }
}

export default Search;