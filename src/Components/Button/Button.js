import React from 'react';

import './Button.scss';

const CLASS = 'el-Button';
const label = 'Open in new tab';

export const Button = ({onClick}) =>{

	const handleClick = (e) => {
		onClick && onClick(e);
	};
	
	const renderButton = () => {
		return (
			<div className={CLASS} onClick={handleClick}>
				{label}
			</div>
		);
	};

	return renderButton();
};
export default Button;
