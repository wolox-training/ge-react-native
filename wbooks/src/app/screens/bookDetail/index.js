import React, {Component} from 'react';
import booksJson from '../../../../resources/books.json';
import {Link} from 'react-router-dom';
import './style.css';
import Comments from './components/Comments';
import NotFoundPage from '../../components/NotFoundPage';

class BookDetail extends Component {

  constructor({match}){
    super();
    this.state = {book: this.getBookInfo(match.params.id)};
  }

  getBookInfo(bookId){
      for(let i= 0; i < booksJson.length; i++) {
        if(booksJson[i].id == bookId){
          return booksJson[i];
        }
      }
      return null;
  }

  getRelatedBooks(book){
    let relatedBooks = [];
    for(let i= 0; i < booksJson.length; i++) {  
        if(booksJson[i].genre === book.genre && booksJson[i].id !== book.id){
          relatedBooks.push(booksJson[i]);
        }
    } 
    return relatedBooks;
  }

  handleBackButton(){
    window.history.back();
  }

  postComment = (comment) => {
    console.log(comment);
    //...
  }

  render(){
    let book = this.state.book;
    if(!book){
      return <NotFoundPage/>
    }
    let relatedBooks = this.getRelatedBooks(book);

    let comments = this.state.comments;

    let relatedList = relatedBooks.map((book) => 
        <div key={'related_' + book.id} className="related-book">
          <Link to={'/books/'+book.id}>
            <img src={book.imageUrl} alt={book.title} className="related-book-image"></img>
          </Link>
        </div>);

    return(
      <div className="book-detail">
        <a className="back-button" onClick={this.handleBackButton}>
          &lt; Volver
        </a>
        <div className="book-info"> 
          <div className="book-summary">
            <div className="book-image-container">
              <img src={book.imageUrl} alt={book.title} className="book-detail-image"/>
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
              <h1>Sugerencias</h1>
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

export default BookDetail;