import * as types from '../Actions/types';

const initialState = {
  usersList: [],
  error: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INITIALIZE_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case types.INITIALIZE_END:
      return {
        ...state,
        error: null,
        loading: false,
        usersList: action.payload,
      };
    case types.SEARCH_USER:
      return {
        ...state,
        error: null,
        usersList: action.payload,
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
