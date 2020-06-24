import React, { useState } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const onLogoutSuccess = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn && <Login onLoginSuccess={onLoginSuccess} />}
      {isLoggedIn && <Dashboard onLogoutSuccess={onLogoutSuccess} />}
    </>
  );
};

export default App;
