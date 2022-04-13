import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Modal from './Modal';
import './Content.css';

export default function Job({ job }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      {openModal && <Modal closeModal={setOpenModal} key={job.id} job={job} />}
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="text-muted date">
                {new Date(job.year).toDateString()}
              </Card.Subtitle>
              <Card.Subtitle className="location">
                <i className="fa fa-location-arrow" aria-hidden="true"></i>{' '}
                {job.location}
              </Card.Subtitle>
              <div style={{ wordBreak: 'break-all' }}>
                <Card.Link href={job.link}>{job.link}</Card.Link>
              </div>
            </div>
            <span className="text-muted price">{job.pages}</span>
          </div>
          <Card.Text>
            <Button
              className="btn-menu"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              See More
            </Button>
          </Card.Text>
          <div>
            <ReactMarkdown source={job.description} />
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
