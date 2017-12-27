import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import messageReducer from './message/reducer';

const RootReducer = combineReducers({messageReducer});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;