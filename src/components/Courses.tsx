import React from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

export default function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {courses.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  );
}