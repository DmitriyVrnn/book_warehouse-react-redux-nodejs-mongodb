import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from "../../actions/authentication";

import background from '../../static/img/annie-spratt-147610-unsplash.jpg'
import logo from '../../static/img/phone-book-svgrepo-com.svg'
//import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="container-login-form">
                <div className="form-wrap">
                    <form className="login-form-validate" onSubmit={this.handleSubmit}>
                        <img className="logo" src={logo} alt="logo"/>
                        <h2 className="title-form">Логин</h2>
                        <div className="wrap-input rs1-wrap-input100 validate-input">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input-field"
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                            <span className="focus-input"></span>
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        </div>
                        <div className="wrap-input rs2-wrap-input100 validate-input">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-field"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                            <span className="focus-input"></span>
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn" type="submit">
                                Войти
                            </button>
                        </div>
                    </form>
                    <div className="login-more">
                        <img className="background" src={background} alt="books"/>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login)