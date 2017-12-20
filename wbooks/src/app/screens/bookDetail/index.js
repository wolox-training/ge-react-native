import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
import Comments from './components/Comments';
import NotFoundPage from '../../components/NotFoundPage';
import UnauthorizedPage from '../../components/UnauthorizedPage';
import { DASHBOARD, BOOKS } from '../../../config/routes';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux';

class BookDetail extends Component {

  state = {
    comments: [
      {id: 1, user: 'PERPE', date: '20/43', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: 2, user: 'PERPE', date: '20/43', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2'}
    ],
    relatedBooks: []
  };

  componentWillMount(){
    this.props.getBook(this.props.match.params.id);
  }

  onGetRelatedBooksSuccess = (books) => {
    this.setState({ relatedBooks: books ? books : [] });
  }

  postComment = (comment) => {
    console.log(comment);
    //...
  }

  render(){
    const book = this.props.book;
    if(this.props.notAuthorized){
      return <UnauthorizedPage/>
    }
    if(this.props.bookLoading){
      return <h1>Cargando...</h1>
    }
    if(!book || this.props.bookFailed){
      return <NotFoundPage/>
    }

    const relatedBooks = this.props.books.filter((storedBook) => storedBook.genre === book.genre && storedBook.id !== book.id).slice(0,5);

    const comments = this.state.comments;

    const relatedList = relatedBooks.map((book) =>
        <div key={`related_${book.id}`} className="related-book">
          <Link to={`${BOOKS}/${book.id}`}>
            <img src={book.image_url} alt={book.title} className="related-book-image"></img>
          </Link>
        </div>);

    return(
      <div className="book-detail">
        <Link to={DASHBOARD} className="back-button">
          &lt; Volver
        </Link>
        <div className="book-info">
          <div className="book-summary">
            <div className="book-image-container">
              <img src={book.image_url} alt={book.title} className="book-detail-image"/>
            </div>
            <div className="book-summary-text">
              <h2 className="title">{book.title}</h2>
              <h3 className="author">{book.author}</h3>
              <h3 className="year">{book.year}</h3>
              <h3 className="genre">{book.genre}</h3>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className="rent-button">Alquilar</button>
            </div>
          </div>
          <hr className="hr-book-detail"/>

          {relatedList.length > 0 &&
          <div>
            <div className="book-related">
              <h1 className="related-title">Sugerencias</h1>
              <div className="related-book-list">
                {relatedList}
              </div>
            </div>
            <hr/>
          </div>
          }

          <Comments comments={comments} postComment={this.postComment}/>

        </div>
      </div>
    );
  }
}

BookDetail.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number
  })
}

const mapStateToProps = (store) => ({
  book: store.books.book,
  books: store.books.books,
  bookLoading: store.books.bookLoading,
  bookFailed: store.books.bookFailed,
  notAuthorized: store.books.notAuthorized,
  notFound: store.books.bookNotFound
});

const mapDispatchToProps = (dispatch) => ({
  getBook: (bookId) => {
    dispatch(actionCreators.getBook(bookId));
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
