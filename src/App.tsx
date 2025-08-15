import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import BuyerOnboarding from './pages/BuyerOnboarding';
import SellerOnboarding from './pages/SellerOnboarding';
import BuyerReview from './pages/BuyerReview';
import BuyerDetails from './pages/BuyerDetails';
import MatchWorkflow from './pages/MatchWorkflow';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding/buyer" element={<BuyerOnboarding />} />
          <Route path="/onboarding/seller" element={<SellerOnboarding />} />
          <Route path="/buyers" element={<BuyerReview />} />
          <Route path="/buyers/:id" element={<BuyerDetails />} />
          <Route path="/match" element={<MatchWorkflow />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
