import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../Images/upload icon.png';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const getFirstName = (e) => {
    const userValue = e.target.value;
    console.log(userValue);
  };

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

        <label for="Last Name">First Name</label>
        <input className="firstName" type="text" /*onChange={getFirstName}*/ />
        <label for="Last Name">Last Name</label>
        <input className="lastName" type="text" /*onChange={getLastName}*/ />
        <label for="Email">Email Address</label>
        <input className="email" type="email" /*onChange={getEmail}*/ />
        <label for="Location">Location</label>
        <input className="location" type="text" /*onChange={getLocation}*/ />
        <label for="Phone Number">Phone Number</label>
        <input className="phoneNumber" type="tel" /*onChange={getPhone}*/ />
        <div className="upload">
          <img src={Img} alt="upload image"></img>
          <p className="cv-content">Drag and drop your CV here</p>
          <p className="cv-option">or</p>
          <div className="cv-files">
            <p className="cv-upload" /*onChange={getCv}*/>
              <a href="">Browse Files</a>
            </p>
          </div>
          <input
            className="Application-btn"
            type="submit"
            value="Submit Application"
          />
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
