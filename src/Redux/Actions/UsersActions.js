import * as types from './types';
import * as api from '../../lib/api';

const PERSISTANT_USER_KEY = 'users';

export const initialize = () => (dispatch) => {
	dispatch({
		type: types.INITIALIZE_START,
	});
	api.get(PERSISTANT_USER_KEY)
	.then(res => {
		dispatch({
			type: types.INITIALIZE_END,
			payload: res.data
		});
	});
};