import * as types from './types';
import * as api from '../../lib/api';

export const getRepos = reposUrl => dispatch => {
  return api
    .get(`/users/${reposUrl}/repos`)
    .then(res => {
      dispatch({
        type: types.GET_REPOS,
        payload: res,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ERROR_OCCURRED,
        payload: error,
      });
    });
};
