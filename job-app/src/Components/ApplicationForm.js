import React from 'react';
import Imgg from "../Images/upload icon.png";

const application = () => {

  return (
    <div className="container">
      <form className="Application-Form">
        <div className="form-delete">
          <p className="form-actions">X</p>
        </div>
        <div className="form-header">
          <h1 className="title">
            Front End Developer
          </h1>
          <p><i class="fa fa-map-marker-alt"></i>Alausa, Lagos</p>
        </div>
        <label for="Last Name">First Name</label>
        <input className="firstName" type="text" />
        <label for="Last Name">Last Name</label>
        <input className="lastName" type="text" />
        <label for="Email">Email Address</label>
        <input className="email" type="email" />
        <label for="Location">Location</label>
        <input className="location" type="text" />
        <label for="Phone Number">Phone Number</label>
        <input className="phoneNumber" type="tel" />
        <div className = "upload">
          <img src={Imgg} alt="upload image"></img>
          <p className="cv-content">Drag and drop your CV here</p>
          <p className="cv-option">or</p>
          <div className="cv-files">
          <p className="cv-upload"><a href=''>Browse Files</a></p>
          </div>
        </div>
        <input className="Application-btn" type="submit" value="Submit Application" />
      </form>
    </div>
  )
}

export default application;