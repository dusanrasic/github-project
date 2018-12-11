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
		// console.error(error);
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
		// console.error(error);
	});
};
export const getRepos = (reposUrl) => (dispatch) => {
	return api.get(`/users/${reposUrl}/repos`)
	.then(res => {
		console.log(res, 'action');
		// dispatch({
		// 	type: types.GET_REPOS,
		// 	payload: res
		// });
	})
	.catch((error) => {
		// console.error(error);
	});
};
