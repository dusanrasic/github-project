import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
				<Link to={`${login}`}>
					<User 
						id={id}
						avatar={avatar_url}
						login={login}
					/>
				</Link>
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
