import React, { Component } from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getRepos} from '../../Redux/Actions/UsersActions';

import './Repos.scss';

const CLASS = 'el-Repos';

class Repos extends Component {
	
	componentDidUpdate(prevProps){
		const tmpRepo = this.props.repos ? this.props.repos: null;
		console.log(tmpRepo, 'tmp');
		
		if (this.props.repos !== prevProps.repos) {
			const {repos} = this.props;
		
			const {getRepos} = this.props;
			getRepos(repos.login);

			console.log(repos.login, 'repos');
		  }
		
		
	}

	renderRepos = () => {
		const {list} = this.props;
		const noData = list && !list.length;

		if (noData){
			return 'No repos...';
		}

		return list.map(this.renderRepo);
	}

	renderRepo = (value) => {
		if (!value){
			return;
		}
		return value;
	}

	render() {
		return (
			<div className={CLASS}>
				{this.renderRepos()}
			</div>
		);
	}
}
Repos.propTypes = {
	getRepos: PropTypes.func.isRequired,
	list: PropTypes.array.isRequired,
};

Repos.defaultProps = {
	list: [],
};

const mapDispatchToProps = {
	getRepos: getRepos,
};
const mapStateToProps = state => {
	return {
		list: state.users.ReposList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
