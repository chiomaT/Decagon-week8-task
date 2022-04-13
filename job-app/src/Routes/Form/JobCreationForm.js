import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const jobApplications = () => {
  return (
    <div className="post-job-container">
      <form className="post-job-Form">
        <div className="form-delete">
          <Link to="../user">
            <i class="fa fa-times" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="post-job-header">
          <h1 className="post-job-title">New Job</h1>
          <p>
            Kindly provide the required information to get matched with suitable
            candidates
          </p>
        </div>
        <label className="job-title" for="Job Title">
          Job Title
        </label>
        <input className="job-input job-title-input" type="text" />
        <label className="job-title" for="Company Name">
          Company Name
        </label>
        <input className="job-input company-name-input" type="text" />
        <label className="job-title" for="Job Location">
          Location
        </label>
        <input className="job-input job-location-input" type="text" />
        <label className="job-title" for="Job Type">
          What type of employement is it?
        </label>
        <select className="job-input-select" name="category" id="employment">
          <option value="Empty">Select option</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>
        <label className="job-title" for="Salary range">
          Salary range
        </label>
        <input className="job-input job-salary-input" type="number" />
        <label className="job-title" for="Submission deadline">
          Submission deadline
        </label>
        <input className="job-input job-deadline-input" type="date" />
        <label className="job-title" for="Job Category">
          What Sector is this job categorized under?
        </label>
        <select className="job-input-select" name="category" id="employment">
          <option value="Empty">Select option</option>
          <option value="Advertising and marketing">
            Advertising and marketing
          </option>
          <option value="Aerospace">Aerospace</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Computer and technology">
            Computer and technology
          </option>
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
        <input
          className="post-job-btn"
          type="submit"
          value="Submit Application"
        />
      </form>
    </div>
  );
};

export default jobApplications;
