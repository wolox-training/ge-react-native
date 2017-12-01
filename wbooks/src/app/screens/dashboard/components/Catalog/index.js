<<<<<<< HEAD
import React from 'react';
import Book from '../Book';
import './style.css';
import PropTypes from 'prop-types'; 

const Catalog = (props) => {
    const bookList = props.books.map((book) => 
      <Book key={`book_${book.id}`} 
=======
import React, {Component} from 'react';
import Book from '../Book';
import './style.css';

class Catalog extends Component {

  render(){
    const bookList = this.props.books.map((book) => 
      <Book key={"book_" + book.id} 
>>>>>>> 6f65eed... added functionality to the catalog now displaying the books nicely, and also functionality to the search filters
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
<<<<<<< HEAD
  
}

Catalog.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.author
  }))
=======
  }
>>>>>>> 6f65eed... added functionality to the catalog now displaying the books nicely, and also functionality to the search filters
}

export default Catalog;