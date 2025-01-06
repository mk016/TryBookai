import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Gradient Background - Fixed position to cover entire viewport */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="min-h-screen pt-[80px] relative">
        {children}
      </main>
    </div>
  );
};

export default Layout; 