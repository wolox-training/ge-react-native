import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Book = (props) => (
  <div className="book">
    <img className="book-img" alt={props.title} src={props.imageUrl}/>
    <h2 className="book-title">{props.title}</h2>
    <p className="book-author">{props.author}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string
}

export default Book;
