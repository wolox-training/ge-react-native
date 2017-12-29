import * as api from '../config/api';
import Reactotron from 'reactotron-react-native'

export const getChats = (userId, receiverId) => {
    return api.get(`/messages?senderId=${userId}&receiverId=${receiverId}&senderId=${receiverId}&receiverId=${userId}`);
  }

export const getUser = (username = 'woloxer') => {
    return api.get(`/users?username=${username}`);
  }

export const getGroups = (userId) => {
  return api.get(`/groups`);
}

export const getContacts = (userId) => {
  return api.get(`/users`);
}

