import * as ChatService from '../../../services/chatService';
import actionTypes from '../actionTypes';

const messageActions = {
  getMessagesLoading(){
    return {
      type: actionTypes.GET_MESSAGES_LOADING
    };
  },
  getMessageSuccess(Messages){
    return {
      type:actionTypes.GET_MESSAGES_SUCCESS, 
      Messages
    };
  },
  getMessagesFailure(message){
    return {
      type: actionTypes.GET_MESSAGES_FAILURE
    }
  }
}

const actionCreators = {
  getChats(userId, receiverId) {
    return async dispatch => {
       dispatch (messageActions.getMessagesLoading());
      try {
        const response = await ChatService.getChats(userId, receiverId);
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