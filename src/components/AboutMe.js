import React from 'react';
import './AboutMe.css'; 
import profileImage from '../assets/GradPicture3.jpg'; 

const AboutMe = () => {
  return (
    <div className="about-container">
      <img
        src={profileImage} 
        alt="Profile of [Your Name]" 
        className="about-image"
      />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello! I'm Miro Enwa, a passionate software developer with a keen interest in building innovative and efficient solutions. 
          With a solid foundation in computer science, I enjoy tackling complex problems and continuously learning new technologies. 
          I specialize in web development, test automation, and creating scalable applications. My goal is to contribute to impactful 
          projects and improve my skills along the way.
        </p>
        <p>
          In my free time, I enjoy reading, solving puzzles, and experimenting with new coding challenges. I'm always eager to collaborate 
          with others and share knowledge to improve software quality and development practices.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
