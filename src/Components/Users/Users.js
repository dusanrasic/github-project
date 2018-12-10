import React, { Component } from 'react';
import User from '../User/User';

import './Users.scss';

const CLASS = 'el-Users';

export default class Users extends Component {

	renderUsers = () => {
		const {users} = this.props;
		const noData = users && !users.length;

		if (noData){
			return 'No users...';
		}

		return users.map(this.renderUser);
	}

	renderUser = (value) => {
		if (!value){
			return;
		}

		let {id, avatar_url, login} = value;
		return (
			<div key={id}>
				<User 
					id={id}
					avatar={avatar_url}
					login={login}
				/>
			</div>
		);
	}

  render() {
		return (
			<div className={CLASS}>
				{this.renderUsers()}
			</div>
		);
  }
}
