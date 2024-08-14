import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeroSection from '../HeroSeciton/HeroSection';
import Features from '../Features/Features';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative min-h-screen">
  {/* Gradient Background */}
  <div className=" absolute z-index inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>

  {/* Navbar */}
  <div className="absolute top-0 left-0 right-0 h-[80px] z-30 bg-transparent">
    <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
      {/* Logo */}
      <div className="flex items-center">
        <div className="rounded-full h-8 w-8 bg-blue-500"></div>
        <h1 className="text-white text-2xl font-bold ml-3">BookAI</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white">
        <a href="#features" className="hover:text-gray-400">Features</a>
        <a href="#howitworks" className="hover:text-gray-400">How It Works</a>
        <a href="#roadmap" className="hover:text-gray-400">Roadmap</a>
        <a href="#api" className="hover:text-gray-400">API</a>
        <a href="#price" className="hover:text-gray-400">Price</a>
        <a href="#models" className="hover:text-gray-400">Models</a>
      </div>

      {/* Login/Signup Button */}
      <div className="hidden md:block">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
          Login / Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-30" onClick={handleNav}>
        {navOpen ? <XMarkIcon className="h-6 text-white" /> : <Bars3Icon className="h-6 text-white" />}
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden ${navOpen ? 'block' : 'hidden'}`}>
      <ul className="absolute bg-[#1a013a] w-full text-white text-center rounded-xl z-30">
        <li className="py-4 border-b border-gray-600 rounded-xl"><a href="#features">Features</a></li>
        <li className="py-4 border-b border-gray-600 rounded-xl"><a href="#howitworks">How It Works</a></li>
        <li className="py-4 border-b border-gray-600 rounded-xl"><a href="#roadmap">Roadmap</a></li>
        <li className="py-4 border-b border-gray-600 rounded-xl"><a href="#api">API</a></li>
        <li className="py-4 border-b border-gray-600 rounded-xl"><a href="#price">Price</a></li>
        <li className="py-4"><a href="#models">Models</a></li>
        <li className="py-4">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
            Login / Sign Up
          </button>
        </li>
      </ul>
    </div>
  </div>

  {/* Hero Section */}
  <section id="hero" className="pt-[80px] relative z-10">
 < HeroSection />
  </section>

  {/* Features Section */}
  <section id="features" className="relative z-10">
  <Features />
  </section>
</div>

  );
};

export default Navbar;
