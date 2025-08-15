import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="flex items-center space-x-2" style={{ fontWeight: 800, fontSize: 18 }}>
          <img
            src="/logo.png"
            alt="TradeLink Logo"
            className="h-8 w-auto"
          />
          <span>TradeLink</span>
        </Link>
        <nav className="nav">
          <NavLink to="/onboarding/buyer">Buyer Onboarding</NavLink>
          <NavLink to="/onboarding/seller">Seller Onboarding</NavLink>
          <NavLink to="/buyers">Buyer Feed</NavLink>
          <NavLink to="/match">Match Workflow</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </div>
    </header>
  );
}
