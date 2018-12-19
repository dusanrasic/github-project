import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Wrapper from '../Wrapper/Wrapper';

import store from '../../lib/store';

import './App.scss';

const CLASS = 'el-App';

class App extends Component {
  render() {
    const { users } = this.props;
    return (
      <Provider store={store}>
        <div className={CLASS}>
          <Wrapper data={users} />
        </div>
      </Provider>
    );
  }
}

export default App;
