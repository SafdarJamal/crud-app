import React from 'react';

import Logout from '../Logout';

const Header = ({ handleAddClick, onLogoutSuccess }) => {
  return (
    <header>
      <h1>Employees Data</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={handleAddClick}>Add Employee</button>
        <Logout onLogoutSuccess={onLogoutSuccess} />
      </div>
    </header>
  );
};

export default Header;
