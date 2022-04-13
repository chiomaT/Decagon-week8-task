import React from 'react';

export default function Modal({ closeModal, job }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <i
          onClick={() => closeModal(false)}
          class="fa fa-times-circle"
          aria-hidden="true"
        ></i>

        <div className="modalTitle">
          <h1>{job.title}</h1>
        </div>
        <div className="modalLocation">
          <p>
            <i className="fa fa-map-marker"></i>
            {job.location}
          </p>
        </div>
        <div className="modalBtn">
          <button className="modalBtn-Btn">Apply Via Find Job</button>
        </div>
        <hr />
        <div className="modal-text">{job.description}</div>
      </div>
    </div>
  );
}
