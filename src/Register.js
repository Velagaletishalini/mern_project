import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useContext(UserContext);

  const handleRegister = () => {
    registerUser({ name, username, age, password });
    alert('User registered successfully!');
  };

  return (
    <div>
      <h2>Register</h2>
      Enter Name:<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br/>
      Enter UserName:<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      Enter Age:<input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br/>
      Enter Password:<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;