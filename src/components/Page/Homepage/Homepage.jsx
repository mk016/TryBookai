import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HeroSection from '../../HeroSeciton/HeroSection'
import Features from '../../Features/Features'
import Work from '../../Card/Work'
import SampleBooks from '../../Card/SampleBooks'
import Update from '../../Card/Update'
import Video from '../../Card/video'
import Roadmap from '../../Card/Roadmap'
import UsersSay from '../../Card/UsersSay'
import PricingPage from '../../Pricing/PricingPage'
import Book from '../../Card/Book'
function Homepage() {
  return (
    <div className='mt-10'>

      <Navbar />
      <HeroSection />
      <Book />
    
      <Features />
      <SampleBooks />
      <Work />
     
      <Video />
    
      <Roadmap />

      <UsersSay />
      <Update />

      <div className="fixed inset-0 -z-10 h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>

    </div>
  )
}

export default Homepage
