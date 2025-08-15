import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="card">
      <h2>404 — Not Found</h2>
      <p className="muted">The page you’re looking for doesn’t exist.</p>
      <Link className="btn btn-outline" to="/">Go Home</Link>
    </div>
  );
}
