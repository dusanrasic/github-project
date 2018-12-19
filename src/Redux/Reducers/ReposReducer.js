import * as types from '../Actions/types';

const initialState = {
  reposList: [],
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_REPOS:
      return {
        ...state,
        error: null,
        reposList: [...action.payload],
      };
    case types.ERROR_OCCURRED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}
