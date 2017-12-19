import { combineReducers } from 'redux';

const filter = (state = {}, action) => {
	switch (action.type){
		case 'CHANGE_FILTER':
			return {
				genre: action.genre,
				text: action.text
			}
		default:
			return state;
	}
}

const RootReducer = combineReducers({filter});

export default RootReducer;