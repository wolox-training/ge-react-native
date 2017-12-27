import * as MessageService from '../../../services/MessageService';
import actionTypes from '../actionTypes';

const messageActions = {

  getMessageSuccess(Messages){
    return {
      type:actionTypes.MESSAGES_LOADED, 
      Messages
    };
  },
}

const actionCreators = {
  getMessages() {
    return async dispatch => {
       dispatch (messageActions.getMessagesLoading());
      try {
        const response = await MessageService.getMessages();
        if(response.status === 200) {
          dispatch(messageActions.getMessagesSuccess(response.data));
        } else {
          dispatch(messageActions.getMessagesFailure(response.problem));
        } 
      } catch (e) {
        dispatch(messageActions.getMessagesFailure(e.message));
      }
    }
  }
}

export default actionCreators;