import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authentication';
import background from '../../static/img/annie-spratt-147610-unsplash.jpg';
import logo from '../../static/img/phone-book-svgrepo-com.svg';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  componentDidMount() {
    const { auth: { isAuthenticated }, history } = this.props;
    if (isAuthenticated) {
      history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push('/');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;
    const { loginUserConnect } = this.props;
    e.preventDefault();
    const user = {
      email,
      password,
    };
    loginUserConnect(user);
  };

  render() {
    const { errors, email, password } = this.state;
    return (
      <div className="container-login-form">
        <div className="form-wrap">
          <form className="login-form-validate" onSubmit={this.handleSubmit}>
            <img className="logo" src={logo} alt="logo" />
            <h2 className="title-form">Логин</h2>
            <div className="wrap-input rs1-wrap-input100 validate-input">
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                name="email"
                onChange={this.handleInputChange}
                value={email}
              />
              <span className="focus-input" />
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </div>
            <div className="wrap-input rs2-wrap-input100 validate-input">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                name="password"
                onChange={this.handleInputChange}
                value={password}
              />
              <span className="focus-input" />
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit">
                  Войти
              </button>
            </div>
          </form>
          <div className="login-more">
            <img className="background" src={background} alt="books" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
  errors: state.errors,
}), { loginUserConnect: loginUser })(Login);

Login.propTypes = {
  loginUserConnect: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
    }).isRequired,
    isAuthenticated: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  history: PropTypes.string,
};

Login.defaultProps = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      name: '',
      role: '',
    }),
    isAuthenticated: false,
  }),
  errors: {},
  history: '',
};
