import React, { Component } from 'react';
import Search from '../Search/Search';
import Users from '../Users/Users';
import Repos from '../Repos/Repos';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../Redux/Actions/UsersActions';

import './Wrapper.scss';

const CLASS = 'el-Wrapper';

class Wrapper extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    usersList: PropTypes.array.isRequired,
    error: PropTypes.object,
  };

  static defaultProps = {
    usersList: [],
    error: null,
  };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers && getUsers();
  }

  renderErrors = () => {
    const { error } = this.props;
    if (!error) {
      return;
    }
    return Object.keys(error).map(this.renderError);
  };

  renderError = (value, key) => {
    if (!value) {
      return;
    }

    let { message } = value;
    return <div key={key}>{message}</div>;
  };

  render() {
    const { usersList } = this.props;
    return (
      <BrowserRouter>
        <div className={CLASS}>
          {this.renderErrors()}
          <div className={CLASS + '-data'}>
            <Search />
            <Users usersList={usersList} />
            <Route
              path="/:login"
              render={({ match }) => (
                <Repos
                  reposUser={usersList.find(
                    u => u.login === match.params.login
                  )}
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  getUsers: getUsers,
};

const mapStateToProps = state => {
  return {
    usersList: state.users.usersList,
    error: state.users.error && state.repos.error,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);
