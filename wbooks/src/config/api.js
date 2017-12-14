import axios from 'axios';
import * as authService from '../services/authService';

const BOOKS_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/';

export const post =  (url, payload) => {

  let config = {headers: {}};
  if(authService.getAccessToken())
    config.headers.Authorization = authService.getAccessToken();

  return axios.post(`${BOOKS_URL}${url}`, payload, config)};

export const get = (url) => {

  let config = {headers: {}};
  if(authService.getAccessToken())
    config.headers.Authorization = authService.getAccessToken();

  return axios.get(`${BOOKS_URL}${url}`, config)};
