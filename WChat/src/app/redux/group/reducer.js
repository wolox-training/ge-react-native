import Immutable from 'seamless-immutable';
import actionTypes from './actionTypes';
import { cloneAndInsertInArray } from '../../../utils/arrayUtils';

const initialState = {
  groups: [],
  groupsLoading: false,
  currentGroupChat: []
};

const group = (state = initialState, action) => {
  let oldGroupIndex;
  let oldGroup;
  let newGroup;
  let newGroups;

  switch (action.type){
    case actionTypes.GET_GROUPS_SUCCESS:
      return Immutable.merge(state, {
        groups: action.groups,
        groupsLoading: false
      });
    case actionTypes.GET_GROUPS_LOADING:
      return Immutable.merge(state, {
        groupsLoading: true
      });
    case actionTypes.GET_GROUPS_FAILURE:
      return Immutable.merge(state, {
        groupsLoading: false,
        groupsError: action.error
      });
    case actionTypes.GET_GROUP_CHAT_SUCCESS:      
      if(!action.chats.length){
        return Immutable.merge(state, {
          currentGroupChat: []
        })
      }
      oldGroupIndex = state.groups.findIndex((group) => group.id === action.groupId);
      oldGroup = state.groups[oldGroupIndex];
      newGroup =  {
        ...oldGroup,
        chats: action.chats,
        lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
      }

      newGroups = cloneAndInsertInArray(state.groups, newGroup, oldGroupIndex)
      return Immutable.merge(state, {
        groups: newGroups,
        currentGroupChat: action.chats.reverse()
      })
    case actionTypes.SEND_GROUP_MESSAGE_FAILURE:
      return Immutable.merge(state, {
        error: action.error
      })
    case actionTypes.GROUP_MESSAGE_SENT:
      oldGroupIndex = state.groups.findIndex((group) => group.id === action.groupId);
      oldGroup = state.groups[oldGroupIndex];
      newChats = [...oldGroup.chats, action.message];
      newGroup =  {
        ...oldGroup,
        chats: newChats,
        lastChat: action.message
      }

      newGroups = cloneAndInsertInArray(state.groups, newGroup, oldGroupIndex);
      return Immutable.merge(state, {
        groups: newGroups,
        currentGroupChat: newChats.reverse()
      })
    default:
      return state;
  };
};

export default group;