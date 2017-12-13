import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
import Comments from './components/Comments';
import NotFoundPage from '../../components/NotFoundPage';
import UnauthorizedPage from '../../components/UnauthorizedPage';
import { DASHBOARD, BOOKS } from '../../../config/routes';
import * as bookService from '../../../services/bookService';

class BookDetail extends Component {

  state = {book: null,
    comments: [{id: 1, user: 'PERPE', date: '20/43', text:'safamdkfmksgdkj g kjf kjfk jfkj fkjkdjfjksperoowo opwporo owpkr eokr o'},{id: 2, user: 'PERPE', date: '20/43', text:'safamdkfmksgdkj g kjf kjfk jfkj fkjkdjfjksperoowo opwporo owpkr eokr 2'}],
    relatedBooks: []
  };

  componentWillMount(){
    this.getBookInfo(this.props.match.params.id);
  }


  getBookInfo(bookId){
    bookService.getBook(bookId, localStorage.getItem('accessToken'), this.onGetBookSuccess, this.onGetBookFailure);
    this.setState({loading: true});
  }

  onGetBookSuccess = (book) => {
    this.setState({loading:false, book: book});
    this.getRelatedBooks(book);
  }

  onGetBookFailure = (error) => {
    if(error.response.status === 401)
      this.setState({loading: false, autenticationError: true});
    else
      this.setState({loading: false, bookNotFound: true});

  }

  getRelatedBooks(book){
    bookService.getRelatedBooks(book, localStorage.getItem('accessToken'), this.onGetRelatedBooksSuccess, this.onGetBookFailure);
  }

  onGetRelatedBooksSuccess = (books) => {
    this.setState({relatedBooks: books? books : []});
  }

  postComment = (comment) => {
    console.log(comment);
    //...
  }

  render(){
    let book = this.state.book;
    if(this.state.autenticationError){
      return <UnauthorizedPage/>
    }
    if(this.state.loading){
      return <h1>Loading...</h1>
    }
    if(!book || this.state.bookNotFound){
      return <NotFoundPage/>
    }
    let relatedBooks = this.state.relatedBooks;

    let comments = this.state.comments;

    let relatedList = relatedBooks.map((book) =>
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

export default BookDetail;
