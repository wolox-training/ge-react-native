import Immutable from 'seamless-immutable';
import actionTypes from './actionTypes';
import { cloneAndInsertInArray } from '../../../utils/arrayUtils';

const initialState = {
  contacts: [],
  username: 'woloxer',
  user: {},
  appLoading: false,
  currentChat: []
};

const user = (state = initialState, action) => {
  let oldContact;
  let oldContactIndex;
  let newContact;
  let newContacts;
  switch (action.type){
    case actionTypes.GET_USER_SUCCESS:
      return Immutable.merge(state, {
        user: action.user
      });
    case actionTypes.GET_USER_FAILURE:
      return Immutable.merge(state, {
        userError: action.message
      });
    case actionTypes.APP_LOADING:
      return Immutable.merge(state, {
        appLoading: true
      });
    case actionTypes.GET_CONTACTS_SUCCESS:
      return Immutable.merge(state, {
        contacts: action.contacts,
        appLoading: false
      })
    case actionTypes.GET_CHATS_LOADING:
      return Immutable.merge(state, {
        chatsLoading: true
      })
    case actionTypes.GET_CHATS_FAILURE:
      return Immutable.merge(state, {
        error: action.error,
        chatsLoading: false
      })
    case actionTypes.GET_CHATS_SUCCESS:
      if(!action.chats.length){
        return Immutable.merge(state, {
          currentChat: []
        })
      }
      oldContactIndex = state.contacts.findIndex((contact) => contact.id === action.receiverId);
      oldContact = state.contacts[oldContactIndex];
      newContact =  {
        ...oldContact,
        chats: action.chats,
        lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
      }
      newContacts = cloneAndInsertInArray(state.contacts, newContact, oldContactIndex)
      return Immutable.merge(state, {
        contacts: newContacts,
        currentChat: action.chats
      })
    case actionTypes.SEND_MESSAGE_FAILURE:
      return Immutable.merge(state, {
        error: action.error
      })
    case actionTypes.MESSAGE_SENT:
      oldContactIndex = state.contacts.findIndex((contact) => contact.id === action.receiverId);
      oldContact = state.contacts[oldContactIndex];
      newChats = [...oldContact.chats, action.message];
      newContact = {
        ...oldContact,
        chats: newChats,
        lastChat: action.message
      }
      newContacts = cloneAndInsertInArray(state.contacts, newContact, oldContactIndex);
      return Immutable.merge(state, {
        contacts: newContacts,
        currentChat: newChats
      })
    default:
      return state;
  };
};

export default user;