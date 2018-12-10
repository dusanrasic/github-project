import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper';

import './App.scss';

const CLASS='el-App';

class App extends Component {
  render() {
    return (
      <div className={CLASS}>
        <Wrapper />
      </div>
    );
  }
}

export default App;
