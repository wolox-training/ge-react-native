import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import message from './message/reducer';
import user from './user/reducer';
import group from './group/reducer';

const RootReducer = combineReducers({message, user, group});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;