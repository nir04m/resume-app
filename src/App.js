import React from 'react';
import './App.css';
// import Section from './components/Section';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe'; // Import the AboutMe component

function App() {
  return (
    <div className="App">
      <div className="u-container">
        <Navbar />
        <AboutMe />
      </div>
      <div className="n-container">

      </div>
    </div>
  );
}

export default App;
