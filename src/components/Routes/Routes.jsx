import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Generate from '../BookGenerator/Sidebar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Generate" element={<Generate />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
