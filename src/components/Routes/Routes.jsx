import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Work from './components/Card/Work';
import SampleBooks from './components/Card/SampleBooks';
import Update from './components/Card/Update';
import Footer from './components/Footer/Footer';
import Video from './components/Card/Video';
import Roadmap from './components/Card/Roadmap';
import UsersSay from './components/Card/UsersSay';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sample-books" element={<SampleBooks />} />
        <Route path="/work" element={<Work />} />
        <Route path="/video" element={<Video />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/users-say" element={<UsersSay />} />
        <Route path="/update" element={<Update />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback route for unknown paths */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
