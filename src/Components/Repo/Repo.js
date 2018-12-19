import React, { Component } from 'react';
import { Button } from '../Button/Button';

import './Repo.scss';

const CLASS = 'el-Repo';

export default class Repo extends Component {
  handleClick = () => {
    let { url } = this.props;

    window.open(
      url,
      '_blank',
      'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes'
    );
  };
  render() {
    let { description, name } = this.props;
    return (
      <div className={CLASS}>
        <p>{name}</p>
        <p>{description}</p>
        <Button onClick={this.handleClick} label="Open in new tab" />
      </div>
    );
  }
}
