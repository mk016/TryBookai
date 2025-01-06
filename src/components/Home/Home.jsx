import React from 'react';
import HeroSection from '../HeroSeciton/HeroSection';
import Features from '../Features/Features';
import Book from '../Card/Book';
import SampleBooks from '../Card/SampleBooks';
import Work from '../Card/Work';
import Video from '../Card/video';
import Roadmap from '../Card/Roadmap';
import UsersSay from '../Card/UsersSay';
import Update from '../Card/Update';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
      <HeroSection />
      <Book />
      <Features />
      <SampleBooks />
      <Work />
      <Video />
      <Roadmap />
      <UsersSay />
      <Update />
      <Footer />
    </>
  );
};

export default Home;