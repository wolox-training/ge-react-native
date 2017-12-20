import * as api from '../config/api';


export const login = (email, password) => {
  return api.post('/users/sessions', {
    email,
    password
   });
  }

export const isLoggedIn = () => localStorage.getItem('isLoggedIn');

export const getAccessToken = () => localStorage.getItem('accessToken');
