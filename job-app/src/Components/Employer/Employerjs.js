import React from "react";
import employerstle from "./employerstle"
const Employer = () => {
  return (
    <div className="employer-entire-page">
      <div className="form-title">
        <h1>Create an employer account</h1>
        <p>Reach top talent and find the right candidate today!</p>
      </div>

      <div className="form-container">
        <div className="aside">
          <h1>Company representative</h1>
          <p>
            This is information partaining to you as a representative of the
            company
          </p>
        </div>

        <div class="form-first-section">
            <div id ="fname">
            <input
            className="firstName"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
            </div>
          <div id ="lname">
          <input
            className="firstName"
            type="text"
            name="firstname"
            placeholder="Last Name"
          />
          </div>
          <div id = "work-e">
          <input
            className="firstName"
            type="text"
            name="firstname"
            placeholder="Work email"
          />
          </div>
          <div id ="password">
          <input
            className="firstName"
            type="text"
            name="firstname"
            placeholder="Create password"
          />
          </div>
         <div id ="position">
         <label for="Location">Position in company</label>
          <input className="location" type="text" />
         </div>
          <div id ="phone">
          <label for="Location">Phone number</label>
          <input className="location" type="text" />
          </div>
         
        </div>
        <div class ="already-have-acct">
            <h4>Already have an ccount? <a href = "#">Login</a></h4>
        </div>
      </div>
    </div>
  );
};
export default Employer;
