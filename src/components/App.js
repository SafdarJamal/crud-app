import React, { Component } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
  }

  onLoginSuccess() {
    this.setState({ isLoggedIn: true });
  }

  onLogoutSuccess() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        {!isLoggedIn && <LoginForm onLoginSuccess={this.onLoginSuccess} />}
        {isLoggedIn && <Dashboard onLogoutSuccess={this.onLogoutSuccess} />}
      </div>
    );
  }
}

export default App;
