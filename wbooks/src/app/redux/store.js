import thunk from 'redux-thunk';
import { RootReducer } from './';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(RootReducer, applyMiddleware(thunk));
export default store;