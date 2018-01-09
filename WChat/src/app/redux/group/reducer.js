import Immutable from 'seamless-immutable';
import actionTypes from './actionTypes';
import { cloneAndInsertInArray, updateElementInArray } from '../../../utils/arrayUtils';

const initialState = {
  groups: [],
  groupsLoading: false,
  currentGroupChat: []
};

const group = (state = Immutable(initialState), action) => {
  let oldGroupIndex;
  let oldGroup;
  let newGroup;
  let newGroups;

  switch (action.type){
    case actionTypes.GET_GROUPS_SUCCESS:
      return state.merge({
        groups: action.groups,
        groupsLoading: false
      });
    case actionTypes.GET_GROUPS_LOADING:
      return state.merge({
        groupsLoading: true
      });
    case actionTypes.GET_GROUPS_FAILURE:
      return state.merge({
        groupsLoading: false,
        groupsError: action.error
      });
    case actionTypes.GET_GROUP_CHAT_SUCCESS:      
      if(!action.chats.length){
        return state.merge({
          currentGroupChat: []
        })
      }
      return state.merge({
        groups: updateElementInArray(
          state.groups, 
          {
            chats: action.chats, 
            lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
          }, 
          action.groupId),
        currentGroupChat: action.chats.reverse()
      })
    case actionTypes.SEND_GROUP_MESSAGE_FAILURE:
      return state.merge({
        error: action.error
      })
    case actionTypes.GROUP_MESSAGE_SENT:
      const oldGroup = state.groups.find((group) => group.id === action.groupId);

      if(!oldGroup)
        return state;

      const newChats = [...oldGroup.chats, action.message];
      
      return state.merge({
        groups: updateElementInArray(
          state.groups, 
          {
            chats: newChats, 
            lastChat: action.message
          }, 
          action.groupId
          ),
        currentGroupChat: newChats.reverse()
      })
    default:
      return state;
  };
};

export default group;