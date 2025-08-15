import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        © {new Date().getFullYear()} Caprae — Built for buyer ↔ seller matches.
      </div>
    </footer>
  );
}
