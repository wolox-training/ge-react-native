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
    default:
      return state;
  };
};

export default message;