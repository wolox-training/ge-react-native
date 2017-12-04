import React, {Component} from 'react';
import booksJson from '../../../../resources/books.json';
import {Link} from 'react-router-dom';
import './style.css';

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

  render(){
    let book = this.state.book;
    let relatedBooks = this.getRelatedBooks(book);
    
    let comments = [
        {id: 1, user: "PePE", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date: "02/03/04"}
        ,{id: 2, user: "PePE2", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.2", date: "02/03/05"}]
    
    let commentsList = comments.map((comment) => 
      <div className="comment" key={'comment_' + comment.id}>
        <h2>{comment.user}</h2>
        <h3>{comment.date}</h3>
        <p>{comment.text}</p>
      </div>)

    let relatedList = relatedBooks.length > 0 ?
      relatedBooks.map((book) => 
        <div key={'related_' + book.id} className="related-book">
          <Link to={'/books/'+book.id}>
            <img src={book.image_url} alt={book.title}></img>
          </Link>
        </div>) : [];

    return(
      <div className="book-detail">
        <a className="back-button" onClick={this.handleBackButton}>
          &lt; Volver
        </a>
        <div className="book-info"> 
          <div className="book-summary">
            <img src={book.image_url} alt={book.title} className="book-detail-image"/>
            <div className="book-summary-text"><h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <h3>{book.year}</h3>
              <h3>{book.genre}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button>Alquilar</button>
            </div>
          </div>
          <hr/>
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
          <div className="book-comments">
            <h1 className="comments-title">Comentarios</h1>
            <div className="add-comment">
              <h2>Agregar comentario</h2>
              <input type="text"/>
              <button>Enviar</button>
            </div>
            {commentsList}
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;