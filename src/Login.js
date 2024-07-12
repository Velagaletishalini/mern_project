import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(UserContext);

  const handleLogin = () => {
    if (loginUser(username, password)) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <table>
      Username:<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      Password:<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      </table>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;