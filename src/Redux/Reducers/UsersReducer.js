import * as types from '../Actions/types';

const initialState = {
	UsersList: [],
	ReposList: [],
	loading: false
};

export default function(state = initialState, action){
	switch (action.type) {
		case types.INITIALIZE_START:
			return {
				loading: true
			};
		case types.INITIALIZE_END:
			return {
				loading: false,
				UsersList: action.payload
			};
		case types.SEARCH_USER:
			return {
				UsersList: action.payload
			};
		case types.GET_REPOS:			
			return {
				ReposList: [...action.payload]
			};
		default:
			return { ...state };
	}
}
