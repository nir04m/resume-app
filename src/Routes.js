import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Firstpage from './pages/Firstpage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/firstpage" element={<Firstpage />} />
    </Routes>
  );
};

export default AppRoutes;