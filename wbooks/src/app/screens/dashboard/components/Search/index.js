import React, {Component} from 'react';
import { changeFilter } from '../../../../actions';
import { connect } from 'react-redux';
import './style.css';
import * as constants from './constants';

class Search extends Component {
  state = {updateFilters : this.props.updateFilters};

  handleTextChange = (e) => {
    this.setState({titleFilter: e.target.value})
  }

  handleSelectChange = (e) => {
    this.setState({genreFilter: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.titleFilter, this.state.genreFilter);
   //this.props.updateFilters(this.state.genreFilter, this.state.titleFilter); 
  }

  render(){
    return (
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
          <input type="submit" value="" className="search-button"/>
        </div>
     </form>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (titleFilter, genreFilter) => {
    dispatch(changeFilter(genreFilter, titleFilter));
  }
})

export default connect(undefined, mapDispatchToProps)(Search);