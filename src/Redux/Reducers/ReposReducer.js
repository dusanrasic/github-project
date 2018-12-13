import * as types from '../Actions/types';

const initialState = {
	ReposList: []
};

export default function(state = initialState, action){
	switch (action.type) {
		case types.GET_REPOS:			
			return {
				ReposList: [...action.payload]
			};
		default:
			return { ...state };
	}
}
