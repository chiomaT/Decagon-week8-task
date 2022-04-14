import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../Images/upload icon.png';
import './ApplicationForm.css';

const ApplicationForm = () => {
  return (
    <div className="apply-job-container">
      <form className="apply-job-Form">
        <div className="form-delete">
          <Link to="../user">
            <i class="fa fa-times" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="apply-form-header">
          <h1 className="apply-title">Front End Developer</h1>
          <p>
            <i class="fa fa-map-marker"></i>Alausa, Lagos
          </p>
        </div>
        <label className="apply-job-title" for="Last Name">
          First Name
        </label>
        <input className="apply-job-input firstName" type="text" />
        <label className="apply-job-title" for="Last Name">
          Last Name
        </label>
        <input className="apply-job-input lastName" type="text" />
        <label className="apply-job-title" for="Email">
          Email Address
        </label>
        <input className="apply-job-input email" type="email" />
        <label className="apply-job-title" for="Location">
          Location
        </label>
        <input className="apply-job-input location" type="text" />
        <label className="apply-job-title" for="Phone Number">
          Phone Number
        </label>
        <input className=" apply-job-input phoneNumber" type="number" />
        <div className="upload">
          <img src={Img} alt="upload image"></img>
          <p className="cv-content">Drag and drop your CV here</p>
          <p className="cv-option">or</p>
          <div className="cv-files">
            <p className="cv-upload">
              <a href="">Browse Files</a>
            </p>
          </div>
        </div>
        <input
          className="Application-btn"
          type="submit"
          value="Submit Application"
        />
      </form>
    </div>
  );
};

export default ApplicationForm;
