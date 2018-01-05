import * as api from '../config/api';
import { MESSAGES_PATH, USERS_PATH, USER_PATH, GROUPS_PATH, DEFAULT_USER } from '../utils/constants';

export const getChats = (userId, receiverId) => {
    return api.get(`/${MESSAGES_PATH}?senderId=${userId}&receiverId=${receiverId}&senderId=${receiverId}&receiverId=${userId}`);
  }

export const getUser = (username = DEFAULT_USER) => {
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

export const sendPrivateMessage = (body, userId, receiverId) => {
  return api.post(`/${MESSAGES_PATH}`, 
    {
      body, 
      senderId: userId, 
      receiverId
    }
  )
}

export const sendGroupMessage = (body, userId, groupId) => {
  return api.post(`/${MESSAGES_PATH}`, 
    {
      body, 
      senderId: userId, 
      groupId
    }
  )
}
