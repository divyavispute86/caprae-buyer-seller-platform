import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-3 text-center mt-6">
      <p>&copy; {new Date().getFullYear()} Caprae. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
