import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {logoutUser} from '../../actions/authentication'
import Login from '../Login'
import MainPage from '../pages/main-page'

class NavBar extends Component {

    onLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <MainPage onLogout={this.onLogout}
                      user={user.name}
                      role={user.role}
                      avatar={user.avatar}/>
        );

        return (
            <>
                {isAuthenticated ? authLinks : <Login/>}
            </>
        )
    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(withRouter(NavBar));