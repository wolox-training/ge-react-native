import React, {Component} from 'react';
import { connect } from 'react-redux';

import Catalog from './components/Catalog';
import Search from './components/Search';
import * as bookService from '../../../services/bookService';
import UnauthorizedPage from '../../components/UnauthorizedPage';

class Dashboard extends Component {
  state = {
    books: [],
  };

  componentWillMount(){
    this.getBooks();
  }

  getBooks = () =>{
    this.setState({loading: true});
    bookService.getBooks(this.onGetBooksSuccess, this.onGetBooksFailure);
  }

  onGetBooksSuccess = (books) => {
    this.setState({loading: false, books: books});
  }

  onGetBooksFailure = (error) => {
    this.setState({loading: false, notAuthorized: true});
  }

  getFilteredBooks = () => {
    const titleFilter = this.props.titleFilter;
    const genreFilter = this.props.genreFilter;
    if(!titleFilter && !genreFilter) {
      return this.state.books;
    }
    else {
      const newBooks = this.state.books.filter((book) => (
          (!titleFilter || book.title.toLowerCase().includes(titleFilter.toLowerCase()))
          && (!genreFilter || book.genre.toLowerCase() === genreFilter.toLowerCase())
          ));
      return newBooks;
    }    
  }

  render(){
    if(this.state.loading)
      return <h1>Cargando...</h1>
    if(this.state.notAuthorized)
      return <UnauthorizedPage/>
    const books = this.getFilteredBooks();
    return(
      <div className="dashboard">
        <Search/>
        <Catalog books={books}/>
      </div>
      );
  }
}

const mapStateToProps = (store) => ({
  genreFilter: store.filter.genre,
  titleFilter: store.filter.title
});

export default connect(mapStateToProps)(Dashboard);
