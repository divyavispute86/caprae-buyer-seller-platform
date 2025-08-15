import React from 'react';

export default function Settings() {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Settings</h2>
      <div className="row">
        <div className="col">
          <label className="label">Notifications</label>
          <select className="select">
            <option>Email + Push</option>
            <option>Email only</option>
            <option>Push only</option>
            <option>Off</option>
          </select>
        </div>
        <div className="col">
          <label className="label">Theme</label>
          <select className="select">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>
      <hr className="sep" />
      <button className="btn btn-primary">Save</button>
    </div>
  );
}
