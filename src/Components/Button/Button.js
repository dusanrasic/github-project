import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Button.scss';

const CLASS = 'el-Button';
// const label = 'Open in new tab';

export const Button = ({ onClick, label, icon }) => {
  const handleClick = e => {
    onClick && onClick(e);
  };

  const renderButton = () => {
    return (
      <div className={CLASS} onClick={handleClick}>
        {icon && <FontAwesome name={icon} />}
        {label}
      </div>
    );
  };

  return renderButton();
};
export default Button;
