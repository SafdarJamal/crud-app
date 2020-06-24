import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ onLoginSuccess }) => {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'qwerty';

  const [userEnteredEmail, setUserEnteredEmail] = useState(null);
  const [userEnteredPassword, setUserEnteredPassword] = useState(null);

  const handleLogin = () => {
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
          onLoginSuccess();

          Swal.fire({
            position: 'center',
            icon: 'success',
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
            icon: 'error',
            title: 'Incorrect credentials !',
            showConfirmButton: true
          });
        }
      });
    }
  };

  return (
    <div className="small-container">
      <form>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="admin@example.com"
          onChange={e => setUserEnteredEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="qwerty"
          onChange={e => setUserEnteredPassword(e.target.value)}
        />
        <input
          type="button"
          value="Login"
          style={{ marginTop: '12px' }}
          onClick={handleLogin}
        />
      </form>
    </div>
  );
};

export default Login;
