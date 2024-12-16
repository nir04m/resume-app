import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';

import './Homepage.css';

const Homepage = () => {
  return (
    <div className="Homepage">
      {/* Navbar and AboutMe Section */}
      <div className="u-container">
        <Navbar />
        <AboutMe />
      </div>

      {/* Main Content */}
      <div className="n-container">
        <Link to="/firstpage" className="navigate-link">
          Go to First Page
        </Link>

        {/* Projects Section */}
        
      </div>
    </div>
  );
};

export default Homepage;