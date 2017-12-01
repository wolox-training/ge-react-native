import React, {Component} from 'react';
import Book from '../Book';
import './style.css';

class Catalog extends Component {

  render(){
    const bookList = this.props.books.map((book) => 
      <Book key={"book_" + book.id} 
        image_url={book.image_url} 
        alt={book.title} 
        title={book.title} 
        author={book.author}/>
      );
    return (
      <div className="catalog">
        {bookList}
      </div>
      );
  }
}

export default Catalog;