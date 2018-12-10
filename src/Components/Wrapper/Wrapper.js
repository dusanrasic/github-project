import React, { Component } from 'react';
import Search from '../Search/Search';
import Users from '../Users/Users';

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
			<div className={CLASS}>
				<Search />
				<Users data={users}/>
			</div>
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
		users: state.data.users,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);

