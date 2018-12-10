import React from 'react';

import './Avatar.scss';

const CLASS = 'el-Avatar';

export const Avatar = ({imageSource}) => {
  
	const renderAvatar = () => {
		return (
			<div className={CLASS}>
				<img
					src = {imageSource}
					className = {CLASS+'-image'}
				/>
			</div>
		);
	};
	return renderAvatar();
};
export default Avatar;
