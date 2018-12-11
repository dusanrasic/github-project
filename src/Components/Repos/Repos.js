import React, { Component } from 'react';

import './Repos.scss';

const CLASS = 'el-Repos';

export default class Repos extends Component {
	
	componentDidMount(){
		const {repos} = this.props;
		console.log(repos, 'repos');
	}

	renderRepos = () => {
		const {repos} = this.props;
		const noData = repos && !repos.length;

		if (noData){
			return 'No repos...';
		}

		return repos.map(this.renderRepo);
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
