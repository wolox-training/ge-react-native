import axios from 'axios';
import { CHAT_URL } from '../utils/constants';

const config = {};
export const post =  (url, payload) => {
  return axios.post(`${CHAT_URL}${url}`, payload, config)
};

export const get = (url) => {
  return axios.get(`${CHAT_URL}${url}`, config)
};
