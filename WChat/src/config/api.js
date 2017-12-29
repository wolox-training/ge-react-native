import axios from 'axios';
import Reactotron from 'reactotron-react-native'

const CHAT_URL = 'http://10.0.0.159:3000';
const config = {};
export const post =  (url, payload) => {
  return axios.post(`${CHAT_URL}${url}`, payload, config)
};

export const get = (url) => {
  return axios.get(`${CHAT_URL}${url}`, config)
};
