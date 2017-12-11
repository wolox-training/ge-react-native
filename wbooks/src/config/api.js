import axios from 'axios';

const BOOKS_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/';

export const post =  (url, payload) => {
  return axios.post(BOOKS_URL + url, payload);
}
