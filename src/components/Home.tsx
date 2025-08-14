import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Welcome to the LMS</h2>
      <p>Explore courses and manage learning.</p>
      <Link to="/courses">Browse Courses</Link>
    </div>
  );
}