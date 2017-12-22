import React, {Component} from 'react';
import { connect } from 'react-redux';
import Catalog from './components/Catalog';
import Search from './components/Search';
import UnauthorizedPage from '../../components/UnauthorizedPage';
import booksActions from '../../redux/Books/actions';
import './style.css';

class Dashboard extends Component {

  componentWillMount(){
    this.props.getBooks();
  }

  getFilteredBooks = () => {
    const titleFilter = this.props.titleFilter;
    const genreFilter = this.props.genreFilter;
    if(!titleFilter && !genreFilter) {
      return this.props.books;
    }
    else {
      const newBooks = this.props.books.filter((book) => (
          (!titleFilter || book.title.toLowerCase().includes(titleFilter.toLowerCase()))
          && (!genreFilter || book.genre.toLowerCase() === genreFilter.toLowerCase())
          ));
      return newBooks;
    }    
  }

  render(){
    if(this.props.booksLoading)
      return <h1>Cargando...</h1>
    if(this.props.notAuthorized || this.props.booksFailed)
      return <UnauthorizedPage/>
    const books = this.getFilteredBooks();
    return(
      <div className="dashboard">
        <Search/>
        {
          books.length > 0 ? 
          <Catalog books={books}/> : 
        <p className="no-books-found">No se encontraron coincidencias</p>
        }
      </div>
      );
  }
}

const mapStateToProps = (store) => ({
  genreFilter: store.books.genre,
  titleFilter: store.books.title,
  books: store.books.books,
  booksLoading: store.books.booksLoading,
  notAuthorized: store.books.notAuthorized,
  booksFailed: store.books.booksFailed
});

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => {
    dispatch(booksActions.getBooks());
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
