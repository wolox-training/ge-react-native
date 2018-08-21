import Immutable from 'seamless-immutable';
import actionTypes from './actionTypes';
import { cloneAndInsertInArray, updateElementInArray } from '../../../utils/arrayUtils';

const initialState = {
  contacts: [],
  username: 'woloxer',
  user: {},
  appLoading: false,
  currentChat: []
};

const user = (state = Immutable(initialState), action) => {
  switch (action.type){
    case actionTypes.GET_USER_SUCCESS:
      return state.merge({
        user: action.user
      });
    case actionTypes.GET_USER_FAILURE:
      return state.merge({
        userError: action.message
      });
    case actionTypes.APP_LOADING:
      return state.merge({
        appLoading: true
      });
    case actionTypes.GET_CONTACTS_SUCCESS:
      return state.merge({
        contacts: action.contacts,
        appLoading: false
      })
    case actionTypes.GET_CHATS_LOADING:
      return state.merge({
        chatsLoading: true
      })
    case actionTypes.GET_CHATS_FAILURE:
      return state.merge({
        error: action.error,
        chatsLoading: false
      })
    case actionTypes.GET_CHATS_SUCCESS:
      if(!action.chats.length){
        return state.merge({
          currentChat: []
        })
      }
      return state.merge({
        contacts: updateElementInArray(
          state.contacts, 
          {
            chats: action.chats, 
            lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
          }, 
          action.receiverId
          ),
        currentChat: action.chats.reverse()
      })
    case actionTypes.SEND_MESSAGE_FAILURE:
      return state.merge({
        error: action.error
      })
    case actionTypes.MESSAGE_SENT:
      const oldContact = state.contacts.find((contact) => contact.id === action.receiverId);
      const newChats = [...oldContact.chats, action.message];
      return state.merge({
        contacts: updateElementInArray(
          state.contacts, 
          {
            chats: newChats, 
            lastChat: action.message
          }, 
          action.receiverId
          ),
        currentChat: newChats.reverse()
      })
    case actionTypes.USER_CREATED:
      const contactsWithNewUser = state.contacts.slice().concat(action.user);
      return state.merge({
        contacts: contactsWithNewUser
      });
    default:
      return state;
  };
};

export default user;