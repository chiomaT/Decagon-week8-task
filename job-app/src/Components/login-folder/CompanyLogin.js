import React from "react";
import Pic from "../../Images/FindJobs.png";
import Pictwo from "../../Images/interviewlogo.png";
import Picthree from "../../Images/Ellipse 2.png";
import Picfour from "../../Images/Ellipse 3.png";
import Picfive from "../../Images/Ellipse 4.png";
import Picsix from "../../Images/for employers.png";
import "./login.css";

const CompanyLoginPage = () => {
  return (
    <div className="whole-login-page">
      <div className="log-in-container">
        <div className="interview-section">
          <div className="company-logo">
            <div id="find-jobs">
              <img src={Pic} />
            </div>
            <div id="for-employers">
              <img src={Picsix} />
            </div>
          </div>
          {/*company-logo  */}
          <div className="interview-title">
            <h1>
              find the best
              <br />
              candidates for your
              <br />
              organisation
            </h1>
          </div>
          {/*interview title  */}
          <div className="interviewlogo">
            <img src={Pictwo} />
          </div>
        </div>{" "}
        {/* unknown */}
        <div className="login">
          <div class="circleflex">
            <div class="none"></div>
            <div className="circle-img">
              <div className="blue-circle">
                {" "}
                <img src={Picthree} />
              </div>
              <div className="red-circle">
                <img src={Picfour} />
              </div>
              <div className="pink-circle">
                <img src={Picfive} />
              </div>
            </div>
            {/*circle-img  */}
          </div>{" "}
          {/*circle-flex */}
          <h1 className="login-title">Login</h1>
          <div id="email-section">
            <div id="e">
              <label for="email">Email</label>
            </div>
            <div id="e-input">
              <input className="Email" id="user-mail" type="text" />
            </div>
          </div>
          {/*email-section  */}
          <div id="password-section">
            <div id="p">
              <label for password="password">
                Password
              </label>
            </div>
            <div id="p-input">
              <input className="Password" type="text" />
            </div>
          </div>
          {/*password-section  */}
          <div className="login-btn">Login</div>
        </div>
        {/*login  */}
      </div>{" "}
      {/*log-in-container  */}
    </div>
  );
};

export default CompanyLoginPage;
