import React, {Component} from 'react';
import Catalog from './components/Catalog';
import Search from './components/Search';
import booksJson from '../../../../resources/books.json';

class Dashboard extends Component {
  state = {
    filteredBooks: booksJson,
    books: booksJson
  };

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
    return(
      <div className="dashboard">
        <Search updateFilters={this.updateFilters}/>
        <Catalog books={this.state.filteredBooks}/>
      </div>
      );
  }
}



export default Dashboard;