import React, { Component } from 'react';
import Swal from 'sweetalert2';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminEmail: 'admin@example.com',
      adminPassword: 'qwerty',
      userEnteredEmail: null,
      userEnteredPassword: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(propName, e) {
    this.setState({ [propName]: e.target.value });
  }

  handleLogin() {
    const {
      adminEmail,
      adminPassword,
      userEnteredEmail,
      userEnteredPassword
    } = this.state;

    if (
      userEnteredEmail === adminEmail &&
      userEnteredPassword === adminPassword
    ) {
      Swal.fire({
        timer: 1500,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        onClose: () => {
          this.props.onLoginSuccess();

          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Successfully logged in',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    } else {
      Swal.fire({
        timer: 1500,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        onClose: () => {
          Swal.fire({
            position: 'center',
            type: 'error',
            title: 'Incorrect credentials !',
            showConfirmButton: true
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="container">
        <form>
          <h1>Admin Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="admin@example.com"
            onChange={e => this.handleInputChange('userEnteredEmail', e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="qwerty"
            onChange={e => this.handleInputChange('userEnteredPassword', e)}
          />
          <input
            type="button"
            onClick={this.handleLogin}
            value="Login"
            className="login-btn"
          />
        </form>
      </div>
    );
  }
}

export default LoginForm;
