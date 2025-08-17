import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Welcome 👋</h2>
      <p className="muted">An approachable buyer ↔ seller platform where sellers make the first move.</p>
      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <Link className="btn btn-primary" to="/onboarding/seller">I’m a Seller</Link>
        <Link className="btn btn-outline" to="/onboarding/buyer">I’m a Buyer</Link>
      </div>
      <hr className="sep" />
      <p>After onboarding, visit the <Link to='/buyers'>Buyer Feed</Link> to accept/reject, then use the <Link to='/match'>Match Workflow</Link> to progress a deal.</p>
    </div>
  );
}
