import React, {Component} from 'react';
import booksJson from '../../../../../resources/books.json'; 
import Book from './Book';

class Catalog extends Component {
	constructor(props){
		super(props);		
		this.state={filters:props.filters, books: booksJson};	
	}


	render(){
		const listBooks = this.state.books.map((book) => 
			<Book image_url={book.image_url} alt={book.title} title={book.title} author={book.author}/>)

		return (
			<div className="catalog">
				{listBooks}
			</div>
			);
	}
}

export default Catalog;