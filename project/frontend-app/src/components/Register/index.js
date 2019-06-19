import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { registerUser } from '../../actions/authentication';

class Register extends PureComponent {
    state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {},
    };

    componentDidMount() {
      const { auth: { isAuthenticated }, history } = this.props;
      if (isAuthenticated) {
        history.push('/register');
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        errors: {},
      });
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
      const {
        name, email, password, passwordConfirm,
      } = this.state;
      const { registerUserConnect, history } = this.props;
      e.preventDefault();
      const user = {
        name,
        email,
        password,
        passwordConfirm,
      };
      registerUserConnect(user, history);
    };

    render() {
      const {
        errors, name, password, email, passwordConfirm,
      } = this.state;
      return (
        <div className="container-register-form">
          <form className="register-form" onSubmit={this.handleSubmit}>
            <h2 className="title-register">Зарегистрировать сотрудника</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Имя"
                className="input-register"
                name="name"
                onChange={this.handleInputChange}
                value={name}
              />
              {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="E-mail"
                className="input-register"
                name="email"
                onChange={this.handleInputChange}
                value={email}
              />
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Пароль"
                className="input-register"
                name="password"
                onChange={this.handleInputChange}
                value={password}
              />
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Повторить пароль"
                className="input-register"
                name="password_confirm"
                onChange={this.handleInputChange}
                value={passwordConfirm}
              />
              {errors.passwordConfirm && (<div className="invalid-feedback">{errors.passwordConfirm}</div>)}
            </div>
            <div className="form-group">
              <button className="btn-register" type="submit">
                Добавить сотрудника
              </button>
            </div>
          </form>
        </div>
      );
    }
}

export default connect(state => ({
  auth: state.auth,
  errors: state.errors,
}), { registerUserConnect: registerUser })(withRouter(Register));

Register.propTypes = {
  registerUserConnect: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirm: PropTypes.string,
  }),
};

Register.defaultProps = {
  errors: ({}),
  auth: {
    isAuthenticated: false,
  },
};
