import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: 16, borderTop: '1px solid #eee', textAlign: 'center' }}>
      © {new Date().getFullYear()} LMS — Demo
    </footer>
  );
}