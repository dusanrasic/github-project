import * as types from '../Actions/types';

const initialState = {
	ReposList: [],
	error: null
};

export default function(state = initialState, action){
	switch (action.type) {
		case types.GET_REPOS:			
			return {
				ReposList: [...action.payload]
			};
		case types.ERROR_OCCURRED:
			return {
				error: action.payload
			};
		default:
			return { ...state };
	}
}
