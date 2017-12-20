import * as AuthService from '../../services/authService';
import * as BookService from '../../services/bookService';
import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';

const actionTypes = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  LOGIN_REQUEST : 'LOGIN_REQUEST ',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  BOOKS_LOADING: 'BOOKS_LOADING',
  BOOKS_LOADED: 'BOOKS_LOADED',
  BOOKS_FAILED: 'BOOKS_FAILED',
  BOOK_LOADING: 'BOOK_LOADING',
  BOOK_LOADED: 'BOOK_LOADED',
  BOOK_FAILED: 'BOOK_FAILED',
  LOGOUT: 'LOGOUT',
}

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

const authActions = {
  loginRequest() { 
    return {
      type: actionTypes.LOGIN_REQUEST
    } 
  },
  loginSuccess(accessToken) { 
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('accessToken', accessToken);
    return {
      type: actionTypes.LOGIN_SUCCESS, 
      accessToken
    } 
  },
  loginFailure(error) {
    return {
      type: actionTypes.LOGIN_FAILURE,
      error
    }
  },
}

export const actionCreators = {

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

  login(email, password) {
      return async dispatch => {
        dispatch(authActions.loginRequest());
        try {
          const response = await AuthService.login(email, password);
          if(response.status === 200) {
            dispatch(authActions.loginSuccess(response.data.access_token));
          } else {
            dispatch(authActions.loginFailure(response));
          }
        } catch(e) {
          dispatch(authActions.loginFailure(e.message));
        }
   };
 },

 logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('accessToken');
  return {type: actionTypes.LOGOUT};
 },
}

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

const authInitialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn'),
  accessToken: localStorage.getItem('accessToken'),
  loginLoading: false,
  loginFailed: false
}
const auth = (state = authInitialState, action) => {
  switch (action.type){
    case actionTypes.LOGIN_REQUEST:
      return Immutable.merge(state, {
        loginLoading: true,
        loginFailed: false
      })
    case actionTypes.LOGIN_SUCCESS:
      return Immutable.merge(state, {
        accessToken: action.accessToken,
        isLoggedIn: true,
        loginLoading: false,
        loginFailed: false
      });
    case actionTypes.LOGIN_FAILURE:
      return Immutable.merge(state, {
        loginLoading: false,
        loginFailed: true
      });
    case actionTypes.LOGOUT:
      return Immutable.merge(state, {
        isLoggedIn: false,
        accessToken: null
      })
    default: 
      return state;
  }
}

export const RootReducer = combineReducers({books, auth});
