import * as AuthService from '../../services/authService';
import * as BookService from '../../services/bookService';

const actionTypes = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  BOOKS_LOADING: 'BOOKS_LOADING',
  BOOKS_LOADED: 'BOOKS_LOADED',
  BOOKS_FAILED: 'BOOKS_FAILED'
}

const loadingActions = {
  getBooksLoading(){
    return {type: actionTypes.BOOKS_LOADING}
  },
  getBooksSuccess(){
    return {type:actionTypes.BOOKS_LOADED};
  },
  getBooksFailure(){
    return {type:actionTypes.BOOKS_FAILED}
  }
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
       dispatch (loadingActions.getBooksLoading());
      try {
        const response = await BookService.getBooks();
        if(response.status === 200) {
          dispatch(loadingActions.getBooksSuccess(response.data));
        } else {
          dispatch(loadingActions.getBooksFailure(response.problem));
        } 
      } catch (e) {
        dispatch(loadingActions.getBooksFailure(e.message));
      }
    }
  },

  loginSuccess({ data }) {type: 'LOGIN_SUCCESS', data},

  // loginRequest(email, password) => {
  //     await AuthService.login({email, password}, 
  //       () => {
  //         dispatch(loginSuccess);
  //       });
  //     return {type: 'LOGIN_REQUEST'};
  //  };
}