import React from 'react';

const Header = ({ handleAddClick, handleLogout }) => {
  return (
    <header>
      <h1>Employees Data</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={handleAddClick}>Add Employee</button>
        <button
          style={{ marginLeft: '12px' }}
          className="muted-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
