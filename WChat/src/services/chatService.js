import * as api from '../config/api';
import { MESSAGES_PATH, USERS_PATH, USER_PATH, GROUPS_PATH } from '../utils/constants';

export const getChats = (userId, receiverId) => {
    return api.get(`/${MESSAGES_PATH}?senderId=${userId}&receiverId=${receiverId}&senderId=${receiverId}&receiverId=${userId}`);
  }

export const getUser = (username = 'woloxer') => {
    return api.get(`/${USERS_PATH}?username=${username}`);
  }

export const getGroups = (userId) => {
  return api.get(`/${USER_PATH}/${userId}/${GROUPS_PATH}`);
}

export const getGroupMessages = (groupId) => {
  return api.get(`/${MESSAGES_PATH}?groupId=${groupId}`);
}

export const getContacts = (userId) => {
  return api.get(`/${USERS_PATH}`);
}
