import * as ChatService from '../../../services/chatService';
import actionTypes from '../actionTypes';

const groupActions = {
  getGroupsLoading(){
    return {
      type: actionTypes.GET_GROUPS_LOADING
    }
  },
  getGroupsFailure(error){
    return {
      type: actionTypes.GET_GROUPS_FAILURE,
      error
    }
  },
  getGroupsSuccess(groups){
    return {
      type: actionTypes.GET_GROUPS_SUCCESS,
      groups
    }
  },
  getGroupChatSuccess(groupId, chats){
    return {
      type: actionTypes.GET_GROUP_CHAT_SUCCESS,
      groupId,
      chats
    }
  }
}

const actionCreators = {
  getGroups(userId) {
    return async dispatch => {
      dispatch(groupActions.getGroupsLoading());
      try {
        const response = await ChatService.getGroups();
        if(response.status === 200) {
          const groups = response.data;
          dispatch(groupActions.getGroupsSuccess(groups));
          groups.forEach((group) => dispatch(this.getChats(group.id)));
        } else {
          dispatch(groupActions.getGroupsFailure(response.problem));
        } 
      } catch (e) {
        dispatch(groupActions.getGroupsFailure(e.message));
      }
    }
  },
  getChats(groupId) {
    return async dispatch => {
      try {
        const response = await ChatService.getGroupMessages(groupId);
        if(response.status === 200){
          dispatch(groupActions.getGroupChatSuccess(groupId, response.data));
        } else {
          dispatch(groupActions.getGroupsFailure(response.problem));
        } 
      }catch (e) {
        dispatch(groupActions.getGroupsFailure(e.message));
      }  
    }
  }
}

export default actionCreators;