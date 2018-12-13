import React, { Component } from 'react';
import Search from '../Search/Search';
import Users from '../Users/Users';
import Repos from '../Repos/Repos';
import {BrowserRouter, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {initialize} from '../../Redux/Actions/UsersActions';

import './Wrapper.scss';

const CLASS='el-Wrapper';

class Wrapper extends Component {

	componentDidMount(){
		const {initializeApp} = this.props;
		initializeApp && initializeApp();
	}
	render() {
		const {users} = this.props;
		return (
			<BrowserRouter>
				<div className={CLASS}>
					<Search />
					<Users users={users}/>
					<Route path='/g/:login' render={
						({match}) => (
							<Repos repos={
								users.find(u => u.login === match.params.login)
							} />
						)
					}/>
				</div>
			</BrowserRouter>
		);
	}
}

Wrapper.propTypes = {
	initializeApp: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired,
};

Wrapper.defaultProps = {
	users: [],
};

const mapDispatchToProps = {
	initializeApp: initialize,
};

const mapStateToProps = state => {
	return {
		users: state.users.UsersList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);

