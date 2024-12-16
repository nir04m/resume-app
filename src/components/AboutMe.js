import React from 'react';
import './AboutMe.css'; 
import { Card } from 'react-bootstrap';
import projects from '../data/Projectdata';
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
      <h2 className="projects-title">My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <Card.Img variant="top" src={project.imgSrc} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn-view">View Project</button>
                </a>
              </Card.Body>
            </Card>
          ))}
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