import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './Body.css';

export default function Job({ job }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="text-muted date">
              {new Date(job.year).toDateString()}
            </Card.Subtitle>
            <Badge bg="secondary" className="location">
              <i class="fa fa-location-arrow" aria-hidden="true"></i>{' '}
              {job.country}
            </Badge>
            <div>
              <ReactMarkdown children={job.links} />
              <Card.Text>
                {job.author}, {job.language}, {job.imageLink}
              </Card.Text>
            </div>
          </div>
          <span className="text-muted price">{job.pages}</span>
        </div>
        <Card.Text>
          <Button className="btn-menu">See More</Button>
        </Card.Text>
        <div>
          <ReactMarkdown children={job.description} />
        </div>
      </Card.Body>
    </Card>
  );
}
