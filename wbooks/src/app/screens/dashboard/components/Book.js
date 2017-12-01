import React, {Component} from 'react';

class Book extends Component{
  state = {};

  render(){
    return(
      <div className="book">
        <img className="book-img" src={this.props.image_url}/>
        <h2 className="book-title">{this.props.title}</h2>
        <p className="book-author">{this.props.author}</p>
      </div>
      );
  }

}

export default Book;