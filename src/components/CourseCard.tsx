import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
      <h4>{course.title}</h4>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`}>View</Link>
    </div>
  );
}