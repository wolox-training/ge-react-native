import * as ChatService from '../../../services/chatService';
import actionTypes from '../actionTypes';
import Reactotron from 'reactotron-react-native';

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
}

const actionCreators = {
  getGroups() {
    return async dispatch => {
      dispatch(groupActions.getGroupsLoading());
      try {
        const response = await ChatService.getGroups();
        if(response.status === 200) {
          dispatch(groupActions.getGroupsSuccess(response.data));
        } else {
          dispatch(groupActions.getGroupsFailure(response.problem));
        } 
      } catch (e) {
        dispatch(groupActions.getGroupsFailure(e.message));
      }
    }
  }
}

export default actionCreators;