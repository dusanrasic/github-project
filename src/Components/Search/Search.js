import React, { Component } from 'react';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchUser, getUsers} from '../../Redux/Actions/UsersActions';

import './Search.scss';

const CLASS = 'el-Search';

class Search extends Component {

	static propTypes = {
		searchUser: PropTypes.func.isRequired,
		getUsers: PropTypes.func.isRequired,
	};

	constructor(){
		super();
		this.state = {
			searchValue: ''
		};
	}

	handleChange = (e) =>{
		if (e.target.value === ''){
			const {getUsers} = this.props;
			getUsers && getUsers();
			// return;
		}
		this.setState({
			searchValue: e.target.value
		},
		);
	}

	handleClick = () => {
		const {searchUser} = this.props;
		if (this.state.searchValue === ''){
			return;
		}
		searchUser(this.state.searchValue);
	}

	render() {
			return (
				<div className={CLASS}>
					<Input 
						onChange = {this.handleChange}
					/>
					<Button 
						icon = 'search'
						onClick = {this.handleClick}
					/>
				</div>
			);
	}
}

const mapDispatchToProps = {
	searchUser: searchUser,
	getUsers: getUsers,
};

export default connect(null, mapDispatchToProps)(Search);
