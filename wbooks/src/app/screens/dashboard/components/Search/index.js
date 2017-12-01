import React, {Component} from 'react';
import './style.css';
<<<<<<< HEAD
import * as constants from './constants';
=======
>>>>>>> 6f65eed... added functionality to the catalog now displaying the books nicely, and also functionality to the search filters

class Search extends Component {
  state = {updateFilters : this.props.updateFilters};

<<<<<<< HEAD
  handleTextChange = (e) => {
    this.setState({titleFilter: e.target.value})
  }

  handleSelectChange = (e) => {
    this.setState({dropdownFilter: e.target.value});
  }

  handleSubmit = (e) => {
=======
  handleTextChange(e){
    this.setState({titleFilter: e.target.value})
  }

  handleSelectChange(e){
    this.setState({dropdownFilter: e.target.value});
  }

  handleSubmit(e){
>>>>>>> 6f65eed... added functionality to the catalog now displaying the books nicely, and also functionality to the search filters
    e.preventDefault();
   this.props.updateFilters(this.state.dropdownFilter, this.state.titleFilter); 
  }

  render(){
    return (
<<<<<<< HEAD
      <form onSubmit={this.handleSubmit } className="search">
        <select className="filter-dropdown" defaultValue="" onChange={this.handleSelectChange}>
          <option value="">Seleccionar filtro </option>
          <option value={constants.SHORT_STORY}>Short story</option>
          <option value={constants.SUSPENSE}>Suspense</option>
          <option value={constants.THRILLER}>Thriller</option>
          <option value={constants.FICTION}>Fiction</option>
          <option value={constants.OTHER}>Other</option>
        </select>
        <div className="filter-text">
          <input className="text-input" type="text" placeholder="Buscar..." onChange={this.handleTextChange}/>
=======
      <form onSubmit={this.handleSubmit.bind(this)} className="search">
        <select className="filter-dropdown" defaultValue="" onChange={this.handleSelectChange.bind(this)}>
          <option value="">Seleccionar filtro </option>
          <option value="short story">Short story</option>
          <option value="Suspense">Suspense</option>
          <option value="Thriller">Thriller</option>
          <option value="Fiction">Fiction</option>
          <option value="Other">Other</option>
        </select>
        <div className="filter-text">
          <input className="text-input" type="text" placeholder="Buscar..." onChange={this.handleTextChange.bind(this)}/>
>>>>>>> 6f65eed... added functionality to the catalog now displaying the books nicely, and also functionality to the search filters
          <input type="submit" value="" className="search-button"/>
        </div>
     </form>);
  }
}

export default Search;