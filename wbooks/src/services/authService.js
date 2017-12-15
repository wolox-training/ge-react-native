import * as api from '../config/api';


export const login = (payload, onLoginSuccess, onLoginFailure) => {
  api.post('/users/sessions', {
    email: payload.mail,
    password: payload.pass
  })
    .then((response) => {
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('isLoggedIn', true);
      onLoginSuccess(response)})
    .catch(onLoginFailure);
  }

export const isLoggedIn = () => localStorage.getItem('isLoggedIn');

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('accessToken');
}

export const getAccessToken = () => localStorage.getItem('accessToken');
