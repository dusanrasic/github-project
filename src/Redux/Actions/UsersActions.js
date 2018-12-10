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
