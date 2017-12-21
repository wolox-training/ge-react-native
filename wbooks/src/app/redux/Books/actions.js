import * as BookService from '../../../services/bookService';
import actionTypes from '../actionTypes';

const bookActions = {
  getBooksLoading(){
    return {type: actionTypes.BOOKS_LOADING}
  },
  getBooksSuccess(books){
    return {
      type:actionTypes.BOOKS_LOADED, 
      books
    };
  },
  getBooksFailure(){
    return {type:actionTypes.BOOKS_FAILED}
  },
  getBookLoading(){
    return {type: actionTypes.BOOK_LOADING}
  },
  getBookSuccess(book){
    return {
      type:actionTypes.BOOK_LOADED, 
      book
    };
  },
  getBookFailure(){
    return {type:actionTypes.BOOK_FAILED}
  },
}

const actionCreators = {
  changeFilter(genre, title) {
    return {
      type: 'CHANGE_FILTER',
      genre,
      title
    }
  },
  getBooks() {
    return async dispatch => {
       dispatch (bookActions.getBooksLoading());
      try {
        const response = await BookService.getBooks();
        if(response.status === 200) {
          dispatch(bookActions.getBooksSuccess(response.data));
        } else {
          dispatch(bookActions.getBooksFailure(response.problem));
        } 
      } catch (e) {
        dispatch(bookActions.getBooksFailure(e.message));
      }
    }
  },
  getBook(bookId) {
    return async dispatch => {
       dispatch (bookActions.getBookLoading());
      try {
        const response = await BookService.getBook(bookId);
        if(response.status === 200) {
          dispatch(bookActions.getBookSuccess(response.data));
        } else {
          dispatch(bookActions.getBookFailure(response.problem));
        } 
      } catch (e) {
        dispatch(bookActions.getBookFailure(e.message));
      }
    }
  },
}

export default actionCreators;