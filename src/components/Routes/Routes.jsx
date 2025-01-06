import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Generate from '../BookGenerator/Sidebar';
import BookGenerate from '../BookGenerator/BookGenerator';
import Books from '../Books/Books';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Login from '../login/login';
import Book from '../Card/Book';

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/Generate" 
          element={
            <div className='flex'>
              <Generate />
              <BookGenerate />
            </div>
          } 
        />
        <Route path='/books' element={<Books />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
