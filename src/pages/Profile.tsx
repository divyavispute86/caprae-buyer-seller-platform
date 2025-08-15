import React from 'react';

export default function Profile() {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Your Profile</h2>
      <div className="row">
        <div className="col">
          <label className="label">Name</label>
          <input className="input" placeholder="Your Name" defaultValue="Demo User" />
        </div>
        <div className="col">
          <label className="label">Email</label>
          <input className="input" placeholder="you@example.com" defaultValue="demo@caprae.dev" />
        </div>
      </div>
      <hr className="sep" />
      <button className="btn btn-primary">Update</button>
    </div>
  );
}
