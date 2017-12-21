import Immutable from 'seamless-immutable';
import actionTypes from '../actionTypes';

const initialState = {
  genre: '',
  title: '',
  books: [],
  booksLoading: true,
  booksFailed: false,
  book: null,
  bookLoading: true,
  bookFailed: false,
};

const books = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.CHANGE_FILTER:
      return Immutable.merge(state, {
        genre: action.genre,
        title: action.title
      })
    case actionTypes.BOOKS_LOADED:
      return Immutable.merge(state, {
        books: action.books, 
        booksLoading: false
      });
    case actionTypes.BOOKS_LOADING:
      return Immutable.merge(state, {
        booksLoading: true
      });
    case actionTypes.BOOKS_FAILED:
      return Immutable.merge(state, {
        booksFailed: true,
        booksLoading: false
      });
    case actionTypes.BOOK_LOADING:
      return Immutable.merge(state, {
        bookLoading: true
      });
    case actionTypes.BOOK_LOADED:
      return Immutable.merge(state, {
        book:action.book,
        bookLoading: false
      });
    case actionTypes.BOOK_FAILED:
      return Immutable.merge(state, {
        bookFailed: true,
        bookLoading:false
      })
    default:
      return state;
  }
}
export default books;