import * as ChatService from '../../../services/chatService';
import actionTypes from './actionTypes';
import groupActions from '../group/actions';
import Reactotron from 'reactotron-react-native';

const userActions = {
  getUserFailure(message){
    return {
      type: actionTypes.GET_USER_FAILURE,
      message
    }
  },
  getUserSuccess(user){
    return {
      type: actionTypes.GET_USER_SUCCESS,
      user
    }
  },
  userLoading(){
    return {
      type: actionTypes.APP_LOADING
    }
  },
  getContactsSuccess(contacts){
    return {
      type: actionTypes.GET_CONTACTS_SUCCESS,
      contacts
    }
  },
  getChatsLoading(){
    return {
      type: actionTypes.GET_CHATS_LOADING
    }
  },
  getChatsFailure(error){
    return {
      type: actionTypes.GET_CHATS_FAILURE,
      error
    }
  },
  getChatsSuccess(receiverId, chats){
    return {
      type: actionTypes.GET_CHATS_SUCCESS,
      receiverId,
      chats
    }
  },
  sendMessageFailure(error){
    return {
      type: actionTypes.SEND_MESSAGE_FAILURE,
      error
    }
  },
  messageSent(message, receiverId){
    return {
      type:actionTypes.MESSAGE_SENT,
      message,
      receiverId
    }
  },
  userCreated(user){
    return {
      type: actionTypes.USER_CREATED,
      user
    }
  },
  userCreateFailed(error){
    return {
      type: actionTypes.USER_CREATE_FAILED,
      error
    }
  }
}

const actionCreators = {
  initApp(username) {
    return async dispatch => {
      dispatch(userActions.userLoading());
      try {
        const response = await ChatService.getUser(username);
        if(response.status === 200) {
          const user = response.data[0];
          dispatch(userActions.getUserSuccess(user));
          dispatch(groupActions.getGroups(user.id));
          dispatch(this.getContacts(user.id));
        } else {
          dispatch(userActions.getUserFailure(response.problem));
        } 
      } catch (e) {
        dispatch(userActions.getUserFailure(e.message));
      }
    }
  },
  getContacts(userId) {
    return async dispatch => {
      dispatch(userActions.userLoading());
      try {
        const response = await ChatService.getContacts(userId);
        if(response.status === 200) {
          const contacts = response.data;
          dispatch(userActions.getContactsSuccess(contacts));
          contacts.forEach((contact) => {
            dispatch(this.getChats(userId, contact.id));
          });
        } else {
          dispatch(userActions.getUserFailure(response.problem));
        } 
      } catch (e) {
        dispatch(userActions.getUserFailure(e.message));
      }
    }
  },
  getChats(userId, receiverId) {
    return async dispatch => {
       dispatch (userActions.getChatsLoading());
      try {
        const response = await ChatService.getChats(userId, receiverId);
        if(response.status === 200) {
          dispatch(userActions.getChatsSuccess(receiverId, response.data));
        } else {
          dispatch(userActions.getChatsFailure(response.problem));
        } 
      } catch (e) {
        dispatch(userActions.getChatsFailure(e.message));
      }
    }
  },
  sendPrivateMessage(body, userId, receiverId) {
    return async dispatch => {
      try {
        const response = await ChatService.sendPrivateMessage(body, userId, receiverId);
        if(response.status === 201) {
          dispatch(userActions.messageSent(response.data, receiverId));
        } else {
          dispatch(userActions.sendMessageFailure(response.failure));
        }
      } catch (e) {
        dispatch(userActions.sendMessageFailure(e.message));
      }
    }
  },
  createUser(username){
    return async dispatch => {
      try {
        const response = await ChatService.createNewContact(username);
        if(response.status === 201) {
          dispatch(userActions.userCreated(response.data));
        } else {
          dispatch(userActions.userCreateFailed());
        }
      } catch (e) {
        dispatch(userActions.userCreateFailed());
      }
    }
  }
}

export default actionCreators;