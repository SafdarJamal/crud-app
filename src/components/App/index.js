import React, { useState,useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  const checkLogin = () => {
    let login = sessionStorage.getItem('login');
    if(login === null) {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true);
    }
  }

  useEffect(() => {
    checkLogin();
  },[])

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
