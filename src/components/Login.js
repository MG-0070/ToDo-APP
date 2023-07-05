import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default Login;
