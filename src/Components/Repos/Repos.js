import React, { Component } from 'react';
import User from '../User/User';
import Repo from '../Repo/Repo';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getRepos} from '../../Redux/Actions/ReposActions';

import './Repos.scss';

const CLASS = 'el-Repos';

class Repos extends Component {	

	static propTypes = {
		getRepos: PropTypes.func.isRequired,
		reposList: PropTypes.array.isRequired,
	};

	static defaultProps = {
		reposList: [],
	};

	componentDidMount(){
		const {reposUser, getRepos} = this.props;		

		const noRepos = reposUser;
		
		if (!noRepos){
			return;
		}
		const {login} = reposUser;
		getRepos(login);
	}

	componentDidUpdate(prevProps){
		const {reposUser, getRepos} = this.props;
		
		const noRepos = reposUser;
		
		if (!noRepos){
			return;
		}
		if (reposUser!== prevProps.repos){
			
			const {login} = reposUser;
			
			getRepos(login);
		}
	}

	renderRepos = () => {
		const {reposList} = this.props;
		const noData = reposList && !reposList.length;


		if (noData){
			return 'No repositories...';
		}

		return reposList.map(this.renderRepo);
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
		let {reposUser} = this.props;
		let {avatar_url, login} = reposUser;

		const noRepos = reposUser;

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

	renderSeparator = () => {
		return (
			<div className='el-Separator'/>
		);
	}

	render() {
		let {reposUser} = this.props;
		return (
			<div className={CLASS}>
				{reposUser && this.renderUser()}
				{reposUser && this.renderSeparator()}
				{reposUser && this.renderRepos()}
			</div>
		);
	}
}

const mapDispatchToProps = {
	getRepos: getRepos,
};
const mapStateToProps = state => {
	return {
		reposList: state.repos.reposList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
