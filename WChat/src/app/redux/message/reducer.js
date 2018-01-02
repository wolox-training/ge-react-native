import Immutable from 'seamless-immutable';
import actionTypes from '../actionTypes';

const initialState = {
  chats: [],
};

const message = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.GET_CONTACTS:
      return Immutable.merge(state, {
        contacts: action.contacts
      });
    case actionTypes.GET_MESSAGES_LOADING:
      return Immutable.merge(state, {
        groupsLoading: true
      });
    case actionTypes.GET_MESSAGES_FAILURE:
      return Immutable.merge(state, {
        groupsLoading: false,
        groupsError: action.error
      });
    default:
      return state;
  };
};

export default message;