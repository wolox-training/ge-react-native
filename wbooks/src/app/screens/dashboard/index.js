import React, {Component} from 'react';
import Catalog from './components/Catalog';
import Search from './components/Search';
import * as bookService from '../../../services/bookService';
import UnauthorizedPage from '../../components/UnauthorizedPage';

class Dashboard extends Component {
  state = {
    filteredBooks: [],
    books: []
  };

  componentWillMount(){
    this.getBooks();
  }

  getBooks = () =>{
    this.setState({loading: true});
    bookService.getBooks(localStorage.getItem('accessToken'), this.onGetBooksSuccess, this.onGetBooksFailure);
  }

  onGetBooksSuccess = (books) => {
    this.setState({loading: false, books: books, filteredBooks: books});
  }
  onGetBooksFailure = (error) => {
    console.log(error);
    this.setState({loading: false, notAuthorized: true});
  }

  updateFilters = (dropdownFilter, textFilter) => {

    if(!textFilter && !dropdownFilter) {
      this.setState({filteredBooks:this.state.books});
    }
    else {
      let allBooks = this.state.books;
      let newBooks = allBooks.filter((book) => (
          (!textFilter || book.title.toLowerCase().includes(textFilter.toLowerCase()))
          && (!dropdownFilter || book.genre.toLowerCase() === dropdownFilter.toLowerCase())
          ));
      this.setState({filteredBooks: newBooks});
    }
  }

  render(){
    if(this.state.loading)
      return <h1>Loading...</h1>
    if(this.state.notAuthorized)
      return <UnauthorizedPage/>
    return(
      <div className="dashboard">
        <Search updateFilters={this.updateFilters}/>
        <Catalog books={this.state.filteredBooks}/>
      </div>
      );
  }
}

export default Dashboard;
