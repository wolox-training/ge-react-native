import Immutable from 'seamless-immutable';
import actionTypes from '../actionTypes';

const initialState = {
  groups: [],
  groupsLoading: false,
};

const group = (state = initialState, action) => {
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
      const oldGroupIndex = state.groups.findIndex((group) => group.id === action.groupId);
      const oldGroup = state.groups[oldGroupIndex];
      let newGroup =  {
        ...oldGroup,
        chats: action.chats,
        lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
      }

      let newGroups = state.groups
      .slice(0, oldGroupIndex)
      .concat(newGroup)
      .concat(state.groups
        .slice(oldGroupIndex + 1, state.groups.length + 1 ))
      return Immutable.merge(state, {
        groups: newGroups
      })
    default:
      return state;
  };
};

export default group;