import * as types from '../Actions/types';

const initialState = {
	UsersList: [],
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
		default:
			return { ...state };
	}
}
