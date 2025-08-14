import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome back, {user?.name}.</p>
      <p>Your enrolled courses (mock)</p>
      {/* Replace with real enrolled courses */}
    </div>
  );
}