import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { handleAddClick, handleLogout } = this.props;

    return (
      <header>
        <h1>Employees Data</h1>
        <div className="main-btns">
          <button onClick={handleAddClick}>Add Employee</button>
          <button onClick={handleLogout} className="logout-btn accent-button">
            Logout
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
