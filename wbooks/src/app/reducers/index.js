import { combineReducers } from 'redux';

const initialState = {
  genre: '',
  title: ''
};

const filter = (state = initialState, action) => {
	switch (action.type){
		case 'CHANGE_FILTER':
			return {
				genre: action.genre,
				title: action.title
			}
		default:
			return state;
	}
}

const auth = (state = {isLoggedIn: false}, action) => {
	switch (action.type){
		case 'LOGIN_SUCCESS':
			return {
				accessToken: action.data.accesToken,
				isLoggedIn: true
			}
	}
}

const RootReducer = combineReducers({filter});

export default RootReducer;
