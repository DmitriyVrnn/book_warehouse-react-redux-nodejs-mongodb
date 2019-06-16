import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {logoutUser} from '../../actions/authentication'
import Login from '../Login'
import NavBar from '../NavBar/index'

class EntranceController extends Component {
    onLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <NavBar onLogout={this.onLogout}
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

export default connect(state => ({
    auth: state.auth
}), {logoutUser})(withRouter(EntranceController));

EntranceController.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};