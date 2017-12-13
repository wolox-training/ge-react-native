import axios from 'axios';

const BOOKS_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/';

export const post =  (url, payload) => axios.post(BOOKS_URL + url, payload);

export const get = (url, headers = {}) => axios.get(BOOKS_URL + url, headers);
