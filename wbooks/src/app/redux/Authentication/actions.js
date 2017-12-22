import * as AuthService from '../../../services/authService';
import actionTypes from '../actionTypes';

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
const actionCreators = {
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

export default actionCreators;