import React, { Component } from 'react';
import {Input} from '../Input/Input';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchUser, initialize} from '../../Redux/Actions/UsersActions';

import './Search.scss';

const CLASS = 'el-Search';

class Search extends Component {

	constructor(){
		super();
		this.state = {
			searchValue: ''
		};
	}

	handleChange = (e) =>{
		if (e.target.value === ''){
			const {initializeApp} = this.props;
			initializeApp && initializeApp();
			// return;
		}
		this.setState({
			searchValue: e.target.value
		},
		this.handleSearch
		);
	}

	handleSearch = () => {
		const {searchUser} = this.props;
		searchUser(this.state.searchValue);
	}

	render() {
			return (
				<div className={CLASS}>
					<Input 
						onChange = {this.handleChange}
					/>
				</div>
			);
	}
}
Search.propTypes = {
	searchUser: PropTypes.func.isRequired,
	initializeApp: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	searchUser: searchUser,
	initializeApp: initialize,
};

export default connect(null, mapDispatchToProps)(Search);
