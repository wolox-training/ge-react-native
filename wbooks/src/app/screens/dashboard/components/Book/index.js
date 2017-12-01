import React, {Component} from 'react';
import './style.css';

class Book extends Component{
  render(){
    return(
      <div className="book">
        <img className="book-img" alt={this.props.title} src={this.props.image_url}/>
        <h2 className="book-title">{this.props.title}</h2>
        <p className="book-author">{this.props.author}</p>
      </div>
      );
  }

}

export default Book;