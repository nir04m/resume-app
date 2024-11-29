import React from 'react';
import './Section.css';

const Section = ({ heading, subheading, body }) => {
  return (
    <section className="section">
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <p>{body}</p>
    </section>
  );
};

export default Section;
