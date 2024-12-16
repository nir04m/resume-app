import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ title, description, imgSrc, link }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={imgSrc} alt={`${title} image`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {link && (
          <Button variant="primary" href={link} target="_blank">
            View Project
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;