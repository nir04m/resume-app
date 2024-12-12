import React from 'react';
import './Homepage.css'
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="u-container">
        <Navbar />
        <AboutMe />
      </div>

      {/* Main content */}
      <div className="n-container">
        
      </div>
    </div>
  );
};

export default Homepage;
