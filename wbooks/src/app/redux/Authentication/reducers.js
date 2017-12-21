import Immutable from 'seamless-immutable';
import actionTypes from '../actionTypes';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn'),
  accessToken: localStorage.getItem('accessToken'),
  loginLoading: false,
  loginFailed: false
}

const auth = (state = initialState, action) => {
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

export default auth;