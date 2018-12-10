import React, { Component } from 'react';
import {Avatar} from '../Avatar/Avatar';

import './User.scss';

const CLASS = 'el-User';
export default class User extends Component {

	render() {
		let {avatar, login} = this.props;
		return (
			<div className={CLASS}>
				<Avatar 
					imageSource = {avatar}
				/>
				<p>{login}</p>
			</div>
		);
	}
}
