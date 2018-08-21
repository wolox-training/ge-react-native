import Immutable from 'seamless-immutable';
import actionTypes from './actionTypes';
import { cloneAndInsertInArray, updateElementInArray } from '../../../utils/arrayUtils';
import { CONTACTS_PAGE_SIZE, CHAT_PAGE_SIZE } from '../../../utils/constants';

const initialState = {
  contacts: [],
  contactsPage: 1,
  username: 'woloxer',
  user: {},
  appLoading: false,
  chatPage: 1,
  currentChat: [],
  currentChatShowing: [],
  contactsShowing: []
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
        appLoading: false,
        contactsShowing: action.contacts.slice(0, state.contactsPage * CONTACTS_PAGE_SIZE)
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
      const newContacts = updateElementInArray(
          state.contacts, 
          {
            chats: action.chats, 
            lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
          }, 
          action.receiverId
          );
      return state.merge({
        contacts: newContacts,
        contactsShowing: newContacts.slice(0, state.contactsPage * CONTACTS_PAGE_SIZE),
        currentChat: action.chats,
        currentChatShowing: action.chats.reverse().slice(0, state.chatPage * CHAT_PAGE_SIZE),
      })
    case actionTypes.SEND_MESSAGE_FAILURE:
      return state.merge({
        error: action.error
      })
    case actionTypes.MESSAGE_SENT:
      const oldContact = state.contacts.find((contact) => contact.id === action.receiverId);
      const newChats = [ ...oldContact.chats, action.message];
      return state.merge({
        contacts: updateElementInArray(
          state.contacts, 
          {
            chats: newChats, 
            lastChat: action.message
          }, 
          action.receiverId
          ),
        currentChat: newChats.reverse(),
        currentChatShowing: newChats.slice(0, (state.chatPage * CHAT_PAGE_SIZE))
      })
    case actionTypes.USER_CREATED:
      const contactsWithNewUser = state.contacts.slice().concat(action.user);
      return state.merge({
        contacts: contactsWithNewUser
      });
    case actionTypes.LOAD_MORE_CONTACTS:
      if(state.contactsShowing.length < (state.contactsPage * CONTACTS_PAGE_SIZE))
        return state;
      const newContactPage = state.contactsPage + 1;
      return state.merge({
        contactsPage: newContactPage,
        contactsShowing: state.contacts.slice(0, (newContactPage * CONTACTS_PAGE_SIZE)),
      })
    case actionTypes.LOAD_MORE_CHAT:
      if(state.currentChatShowing.length < (state.chatPage * CHAT_PAGE_SIZE))
        return state;
      const newChatPage = state.chatPage + 1;
      return state.merge({
        chatPage: newChatPage,
        currentChatShowing: state.currentChat.slice(0, (newChatPage * CHAT_PAGE_SIZE))
      })
    default:
      return state;
  };
};

export default user;