import React from 'react';
import logo from '../Image/logo.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <img
          className="findjobs"
          src={logo}
          style={{ width: '5rem' }}
          alt="logo"
        />
        <h1 className="copyright">
          <i className="fa fa-copyright" aria-hidden="true"></i>2022
        </h1>
        <p className="findJobsText">FindJobs</p>
        <p className="Terms-condition">T&C</p>
      </div>
      <div className="footer-icons">
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-facebook"></i>
      </div>
    </div>
  );
}
