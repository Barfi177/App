import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => String(c.id) === id);

  if (!course) return <div>Course not found</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Lessons</h3>
      <ul>
        {course.lessons.map((l, idx) => <li key={idx}>{l}</li>)}
      </ul>
    </div>
  );
}