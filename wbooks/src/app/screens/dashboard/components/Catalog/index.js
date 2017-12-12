import React from 'react';
import {Link} from 'react-router-dom';
import Book from '../Book';
import './style.css';
import PropTypes from 'prop-types';
import { BOOKS } from '../../../../../config/routes';

const Catalog = (props) => {
    const bookList = props.books.map((book) =>
      <Link to={`${BOOKS}/${book.id}`} key={`book_${book.id}`}>
        <Book
        imageUrl={book.imageUrl}
        alt={book.title}
        title={book.title}
        author={book.author}/>
      </Link>
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
