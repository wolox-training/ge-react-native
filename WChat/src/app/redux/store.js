import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import user from './user/reducer';
import group from './group/reducer';
import nav from './nav/reducer';

const RootReducer = combineReducers({user, group, nav});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;