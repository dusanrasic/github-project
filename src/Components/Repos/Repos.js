import React, { Component } from 'react';
import Repo from '../Repo/Repo';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getRepos} from '../../Redux/Actions/UsersActions';

import './Repos.scss';

const CLASS = 'el-Repos';

class Repos extends Component {
	
	componentDidMount(){
		const {repos, getRepos} = this.props;
		const {login} = repos;

		const noLogin = login && !login.length;

		if (noLogin){
			return 'No selected user';
		}
		getRepos(login);
	}

	componentDidUpdate(prevProps){
		if (this.props.repos.login !== prevProps.repos.login){
			const {repos, getRepos} = this.props;
			const {login} = repos;

			const noLogin = login && !login.length;

			if (noLogin){
				return 'No selected user';
			}
			getRepos(login);
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
		let {id, description, html_url, name} = value;
		return (
			<div key={id}>
				<Repo 
					description={description}
					url={html_url}
					name={name}
				/>
			</div>
		);
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
		ReposList: state.repos.ReposList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
