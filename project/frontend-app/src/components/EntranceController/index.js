import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../../actions/authentication';
import Login from '../Login';
import NavBar from '../NavBar/index';

class EntranceController extends Component {
  onLogout = (e) => {
    const { history } = this.props;
    const { logoutUserConnect } = this.props;
    e.preventDefault();
    logoutUserConnect(history);
  };

  render() {
    const {
      auth: {
        isAuthenticated,
        user: {
          name,
          role,
          avatar,
        },
      },
    } = this.props;
    const authLinks = (
      <NavBar
        onLogout={this.onLogout}
        user={name}
        role={role}
        avatar={avatar}
      />
    );

    return (
      <>
        {isAuthenticated ? authLinks : <Login />}
      </>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
}), { logoutUserConnect: logoutUser })(withRouter(EntranceController));

EntranceController.defaultProps = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      name: '',
      role: '',
    }),
    isAuthenticated: false,
  }),
};

EntranceController.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
    }),
    isAuthenticated: PropTypes.bool,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  logoutUserConnect: PropTypes.func.isRequired,
};
