import axios from 'axios';

const BOOKS_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/';

const post =  (url) => {
  return axios.post(BOOKS_URL + url);
}

export default post;
