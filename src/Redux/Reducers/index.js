import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import ReposReducer from './ReposReducer';

export default combineReducers({
	users: UsersReducer,
	repos: ReposReducer
});
