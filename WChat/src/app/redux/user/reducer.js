import Immutable from 'seamless-immutable';
import actionTypes from '../actionTypes';

const initialState = {
  contacts: [],
  username: 'woloxer',
  user: {},
  appLoading: false
};

const user = (state = initialState, action) => {
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
      const oldContactIndex = state.contacts.findIndex((contact) => contact.id === action.receiverId);
      const oldContact = state.contacts[oldContactIndex];
      let newContact =  {
        ...oldContact,
        chats: action.chats,
        lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
      }

      let newContacts = state.contacts
      .slice(0, oldContactIndex)
      .concat(newContact)
      .concat(state.contacts
        .slice(oldContactIndex + 1, state.contacts.length + 1 ))
      return Immutable.merge(state, {
        contacts: newContacts
      })
    default:
      return state;
  };
};

export default user;