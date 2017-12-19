import * as AuthService from '../../services/authService';

export const changeFilter = (genre, title) => ({
  type: 'CHANGE_FILTER',
  genre, 
  title
})

const loginSuccess = ({ data }) => {type: 'LOGIN_SUCCESS', data}

export const loginRequest = (email, password) => dispatch => {
    AuthService.login({email, password}, 
      () => {
        dispatch(loginSuccess);
      });
    return {type: 'LOGIN_REQUEST'};
  };
