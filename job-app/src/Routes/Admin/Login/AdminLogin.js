import React from 'react';
import { Link } from 'react-router-dom';
import Pic from '../../../Images/for employers.png';
import Picone from '../../../Images/FindJobs.png';
import Pictwo from '../../../Images/interviewlogo.png';
import './AdminLogin.css';

export default function AdminLogin() {
  return (
    <div className="admin-whole-login-page">
      <div className="admin-log-in-container">
        <div className="admin-interview-section">
          <div className="admin-company-logo">
            <div id="admin-find-jobs"></div>
            <div id="admin-for-employers">
              <img src={Picone} alt="logo" />
              <img className="admin-for-employers" src={Pic} alt="logo" />
            </div>
          </div>
          <div className="admin-interview-title">
            <h1>
              Find the best
              <br />
              candidates for your
              <br />
              organisation
            </h1>
          </div>
          <div className="admin-interviewlogo">
            <img src={Pictwo} alt="logo" />
          </div>
        </div>
        <div className="admin-login">
          <div class="admin-circleflex">
            <div className="admin-none"></div>
            <div className="admin-circle-img">
              <div className="admin-blue-circle"> </div>
              <div className="admin-red-circle"></div>
              <div className="admin-pink-circle"></div>
            </div>
          </div>{' '}
          <h1 className="admin-login-title">Admin Login</h1>
          <div id="admin-email-section">
            <div id="admin-e">
              <label className="admin-email-label" for="email">
                Email
              </label>
            </div>
            <div id="admin-e-input">
              <input className="admin-Email" id="admin-user-mail" type="text" />
            </div>
          </div>
          <div id="admin-password-section">
            <div id="admin-p">
              <label className="admin-password-label" for password="password">
                Password
              </label>
            </div>
            <div id="admin-p-input">
              <input
                className="admin-Password"
                id="admin-user-password"
                type="text"
              />
            </div>
          </div>
          <Link to="/admin_page">
            <button className="admin-login-btn" type="button">
              Login
            </button>
          </Link>
        </div>
      </div>{' '}
    </div>
  );
}
