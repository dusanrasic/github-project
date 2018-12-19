import React from 'react';

import './Input.scss';

const CLASS = 'el-Input';
const placeholder = 'Search Users';

export const Input = ({ onChange }) => {
  const handleChange = e => {
    onChange && onChange(e);
  };

  const renderInput = () => {
    return (
      <div className={CLASS}>
        <input
          type="text"
          className={CLASS + '-text'}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  };

  return renderInput();
};
export default Input;
