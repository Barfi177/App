import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    // In real app call signup API then log user in
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
        <div>
          <label>Email</label><br />
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label><br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}