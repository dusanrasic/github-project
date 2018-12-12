import React, { Component } from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getRepos} from '../../Redux/Actions/UsersActions';

import './Repos.scss';

const CLASS = 'el-Repos';

class Repos extends Component {
	
	componentDidMount(){
			const {repos, getRepos} = this.props;
			const {login} = repos;

			if (login !== null){
				getRepos(login);
			}
	}
	componentDidUpdate(prevProps){
		if (this.props.repos !== prevProps.repos){
			const {repos, getRepos} = this.props;
			const {login} = repos;
			if (login !== null){
				getRepos(login);
			}
		}
	}
	renderRepos = () => {
		const {ReposList} = this.props;
		const noData = ReposList && !ReposList.length;

		if (noData){
			return 'No repos...';
		}
		return ReposList.map(this.renderRepo);
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
	ReposList: PropTypes.array.isRequired,
};

Repos.defaultProps = {
	ReposList: [],
};

const mapDispatchToProps = {
	getRepos: getRepos,
};
const mapStateToProps = state => {
	return {
		ReposList: state.users.ReposList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
