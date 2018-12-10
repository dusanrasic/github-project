import React, { Component } from 'react';
import {Input} from '../Input/Input';

import './Search.scss';

const CLASS = 'el-Search';

export default class Search extends Component {

	handleChange = () =>{
			//do something
	}
  render() {
		return (
			<div className={CLASS}>
				<Input 
					onChange = {this.handleChange}
				/>
			</div>
		);
  }
}
