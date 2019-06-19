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
      password_confirm: '',
      errors: {},
    };

    componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/register');
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        name: '',
        email: '',
        password: '',
        password_confirm: '',
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
        name, email, password, password_confirm,
      } = this.state;
      e.preventDefault();
      const user = {
        name,
        email,
        password,
        password_confirm,
      };
      this.props.registerUser(user, this.props.history);
    };

    render() {
      const { errors } = this.state;
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
                value={this.state.name}
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
                value={this.state.email}
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
                value={this.state.password}
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
                value={this.state.password_confirm}
              />
              {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
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
}), { registerUser })(withRouter(Register));

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
