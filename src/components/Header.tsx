import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav('/');
  };

  return (
    <header style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #ddd' }}>
      <h3><Link to="/">LMS</Link></h3>
      <nav style={{ display: 'flex', gap: 12, alignItems: 'center', flexGrow: 1 }}>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: 8 }}>{user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: 8 }}>Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
}