import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authentication'
import {withRouter} from 'react-router-dom';

import MainPage from '../pages/main-page'

class NavBar extends Component {

    state = {
        loading: false
    };

    onLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };

    render() {
        const {isAuthenticated, user} = this.props.auth;

        const authLinks =(
            <MainPage onLogout={this.onLogout}
                      user={user.name}
                      role={user.role}/>
        );

        const guestLinks = (
            <ul>
                <li>
                    <Link to="/register">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Sign In</Link>
                </li>
            </ul>
        );

        return (
            <nav>
                <div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
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