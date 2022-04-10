import React from 'react';

const jobApplications = () => {
  return (
    <div className="container">
      <form className="Application-Form">
        <div className="form-delete">
          <p className="form-actions">X</p>
        </div>
        <div className="form-header">
          <h1 className="title">
          New Job
          </h1>
          <p>Kindly provide the required information to get matched with suitable candidates</p>
        </div>
        <label for="Job Title">Job Title</label>
        <input className="firstName" type="text" />
        <label for="Company Name">Company Name</label>
        <input className="lastName" type="text" />
        <label for="Location">Location</label>
        <input className="email" type="text" />
        <label for="Location">What type of employement is it?</label>
        <select name="cars" id="employment">
          <option value="Empty"></option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>
        <label for="Salary range">Salary range</label>
        <input className="phoneNumber" type="tel" />
        <label for="Submission deadline">Submission deadline</label>
        <input className="phoneNumber" type="tel" />
        <label for="Submission deadline">What Sector is this job categorized under?</label>
        <select name="cars" id="employment">
          <option value="Empty"></option>
          <option value="Advertising and marketing">Advertising and marketing</option>
          <option value="Aerospace">Aerospace</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Computer and technology">Computer and technology</option>
          <option value="Construction">Construction</option>
          <option value="Education">Education</option>
          <option value="Energy">Energy</option>
          <option value="Fashion">Fashion</option>
          <option value="Finance and economic">Finance and economic</option>
          <option value="Food and beverage">Food and beverage</option>
          <option value="Health care">Health care</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Media and news">Media and news</option>
          <option value="Mining">Mining</option>
          <option value="Pharmaceutical">Pharmaceutical</option>
          <option value="Telecommunication">Telecommunication</option>
          <option value="Transportation">Transportation</option>
        </select>
        <input className="Application-btn" type="submit" value="Submit Application" />
      </form>
    </div>
  )
}

export default jobApplications;