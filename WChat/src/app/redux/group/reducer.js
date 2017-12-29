import Immutable from 'seamless-immutable';
import actionTypes from '../actionTypes';
import Reactotron from 'reactotron-react-native';

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
    default:
      return state;
  };
};

export default group;