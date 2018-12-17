import * as types from './types';
import * as api from '../../lib/api';

export const initialize = () => (dispatch) => {
	dispatch({
		type: types.INITIALIZE_START,
	});
	return api.get('/users')
	.then(res => {
		dispatch({
			type: types.INITIALIZE_END,
			payload: res
		});
	})
	.catch((error) => {
		dispatch({
			type: types.ERROR_OCCURRED,
			payload: error
		});
	});
};
export const searchUser = (username) => (dispatch) => {
	return api.get(`/search/users?q=${username}`)
	.then(res => {
		dispatch({
			type: types.SEARCH_USER,
			payload: res.items
		});
	})
	.catch((error) => {
		dispatch({
			type: types.ERROR_OCCURRED,
			payload: error
		});
	});
};

