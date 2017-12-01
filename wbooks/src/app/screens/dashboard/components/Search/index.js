import React, {Component} from 'react';
import './style.css';

class Search extends Component {
  state = {updateFilters : this.props.updateFilters};

  handleTextChange(e){
    this.setState({titleFilter: e.target.value})
  }

  handleSelectChange(e){
    this.setState({dropdownFilter: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
   this.props.updateFilters(this.state.dropdownFilter, this.state.titleFilter); 
  }

  render(){
    return (
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
          <input type="submit" value="" className="search-button"/>
        </div>
     </form>);
  }
}

export default Search;