import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import auth from './Authentication/reducers';
import books from './Books/reducers';

const RootReducer = combineReducers({auth, books});

const store = createStore(RootReducer, applyMiddleware(thunk));
export default store;