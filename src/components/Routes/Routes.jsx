import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Page/Homepage/Homepage';
import Generator from '../Generator';
import ApiDocumentation from '../ApiDocs/ApiDocumentation';
import PricingPage from '../Pricing/PricingPage';
import Work from '../Card/Work';
import Books from '../Books/Books';
import Update from '../Card/Update';
import Video from '../Card/video';
import Roadmap from '../Card/Roadmap';
import UsersSay from '../Card/UsersSay';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/generate" element={<Generator />} />
            <Route path="/api" element={<ApiDocumentation />} />
            <Route path="/price" element={<PricingPage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/books" element={<Books />} />
            <Route path="/updates" element={<Update />} />
            <Route path="/video" element={<Video />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/testimonials" element={<UsersSay />} />
        </Routes>
    );
};

export default AppRoutes;
