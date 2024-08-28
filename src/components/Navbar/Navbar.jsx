import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import HeroSection from '../HeroSeciton/HeroSection';
import Features from '../Features/Features';
import Book from '../Card/Book';
import { useAuth0 } from '@auth0/auth0-react'
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  const { user , loginWithRedirect,isAuthenticated  } = useAuth0()

  console.log("current user", user)
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
            <NavLink to="/features" className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}>
              Features
            </NavLink>
            <NavLink to="/howitworks" className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}>
              How It Works
            </NavLink>
            <NavLink to="/roadmap" className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}>
              Roadmap
            </NavLink>
            <NavLink to="/api" className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}>
              API
            </NavLink>
            <NavLink to="/price" className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}>
              Price
            </NavLink>
            <NavLink to="/models" className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}>
              Models
            </NavLink>
          </div>

          {/* Login/Signup Button */}
          <div className="hidden md:block">
          {
            isAuthenticated ? (<button className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full'>Logout</button>) : (<button onClick={(e) => loginWithRedirect()} className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full'>  Login / Sign Up</button>)
        }
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-30" onClick={handleNav}>
            {navOpen ? <XMarkIcon className="h-6 text-white" /> : <Bars3Icon className="h-6 text-white" />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${navOpen ? 'block' : 'hidden'}`}>
          <ul className="absolute bg-[#1a013a] w-full text-white text-center rounded-xl z-30">
            <li className="py-4 border-b border-gray-600 hover:text-gray-600">
              <NavLink to="/features" onClick={handleNav}>Features</NavLink>
            </li>
            <li className="py-4 border-b border-gray-600 hover:text-gray-600">
              <NavLink to="/howitworks" onClick={handleNav}>How It Works</NavLink>
            </li>
            <li className="py-4 border-b border-gray-600 hover:text-gray-600">
              <NavLink to="/roadmap" onClick={handleNav}>Roadmap</NavLink>
            </li>
            <li className="py-4 border-b border-gray-600 hover:text-gray-600">
              <NavLink to="/api" onClick={handleNav}>API</NavLink>
            </li>
            <li className="py-4 border-b border-gray-600 hover:text-gray-600">
              <NavLink to="/price" onClick={handleNav}>Price</NavLink>
            </li>
            <li className="py-4">
              <NavLink to="/models" onClick={handleNav}>Models</NavLink>
            </li>
            <div className="py-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
                Login / Sign Up
              </button>
            </div>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-[80px] relative z-10">
        <HeroSection />
      </section>

      {/* Book Section */}
      <section>
        <Book />
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10">
        <Features />
      </section>
    </div>
  );
};

export default Navbar;
