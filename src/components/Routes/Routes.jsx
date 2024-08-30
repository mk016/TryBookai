import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Generate from '../BookGenerator/Sidebar';
import BookGenerate from '../BookGenerator/BookGenerator';

const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/Generate" 
        element={
          <div className='flex'>
            <Generate />
            <BookGenerate />
          </div>
        } 
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
