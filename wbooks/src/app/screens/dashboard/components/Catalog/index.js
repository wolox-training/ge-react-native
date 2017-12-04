import React from 'react';
import Book from '../Book';
import './style.css';
import PropTypes from 'prop-types'; 

const Catalog = (props) => {
    const bookList = props.books.map((book) => 
      <Book key={`book_${book.id}`} 
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

Catalog.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.author
  }))
}

export default Catalog;