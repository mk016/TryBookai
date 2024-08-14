import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HeroSection from '../../HeroSeciton/HeroSection'
import Features from '../../Features/Features'


function Homepage() {
  return (
    <div>

      <Navbar />
      <HeroSection />
      <Features />
    
      <div className="fixed inset-0 -z-10 h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>

    </div>
  )
}

export default Homepage
