import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Employees Data</h1>
        <div className="main-btns">
          <button onClick={() => this.setState({ addClicked: true })}>
            Add Employee
          </button>
          <button
            onClick={this.props.handleLogout}
            className="logout-btn accent-button"
          >
            Logout
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
