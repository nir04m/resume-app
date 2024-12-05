import React from 'react';
import './AboutMe.css'; 
import profileImage from '../assets/GradPicture3.jpg'; 

function AboutMe() {
  return (
    <div className="about-container">
      <img
        src={profileImage}
        alt="Profile"
        className="about-image"
      />
      <div className="about-text">
        <h2>About Me</h2>
        <p>I'm a passionate developer working on amazing projects to make the world a better place!</p>
      </div>
      <div className="experience">
        <h2>Internship Experience</h2>
        <p>Worked as a Software Engineering Intern at XYZ, specializing in web development and database management.</p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A web application built using React and Node.js to streamline task management.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A mobile app developed in Flutter for tracking fitness activities and goals.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>An AI-powered chatbot integrated with an e-commerce platform to assist users.</p>
        </div>
      </div>
      <div className="discipline">
        <h2>Discipline</h2>
        <p>Computer Science, focusing on full-stack development, AI, and cloud technologies.</p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p>Email: yourname@example.com | Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default AboutMe;
