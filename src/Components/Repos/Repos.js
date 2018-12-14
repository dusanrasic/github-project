import React, { Component } from 'react';
import User from '../User/User';
import Repo from '../Repo/Repo';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getRepos} from '../../Redux/Actions/UsersActions';

import './Repos.scss';

const CLASS = 'el-Repos';

class Repos extends Component {	

	componentDidMount(){
		const {repos, getRepos} = this.props;		

		const noRepos = repos;
		
		if (!noRepos){
			return;
		}
		const {login} = repos;
		getRepos(login);
	}

	componentDidUpdate(prevProps){
		const {repos, getRepos} = this.props;
		
		const noRepos = repos;
		
		if (!noRepos){
			return;
		}
		if (repos!== prevProps.repos){
			
			const {login} = repos;
			
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

	renderUser = () => {
		let {repos} = this.props;
		let {avatar_url, login} = repos;

		const noRepos = repos;

		if (!noRepos){
			return 'No selected user...';
		}

		return (
			<User 
				avatar={avatar_url}
				login={login}
			/>
		);
	}

	render() {
		let {repos} = this.props;
		return (
			<div className={CLASS}>
				{repos && this.renderUser()}
				{repos && <div className='el-Separator'/>}
				{repos && this.renderRepos()}
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
