import React from 'react';
import './Form.css';
import Header from './Header';
import Footer from './Footer';

const Form = () => {
  
  return (
    <div>
      <Header />
      <div className="header-text">
        <h2>Create a Job Seeker Account </h2>
        <p>Your new career is one click away</p>
      </div>
      <div className="contact-form-card">
        <div className="personalDetails">
          <h3>Personal Information</h3>
          <p>personal details pertaining to your personal account</p>
        </div>
        <div className="form-group">
          <form action="https://">
            <div>
              <label className="forms"
                <input type="text" name="firstname" placeholder="First Name" className="inputFirstname"
                onChange={nameChange} />
              </label>
              <label>
                <input type="text" name="lastname" placeholder="Last Name" className="inputLastname" />
              </label>
            </div>
            <div>
              <label>
                <input type="text" name="email" placeholder="Email" />
              </label>
              <label>
                <input type="password" name="" placeholder="Password" />
              </label>
            </div>
            <div>
              <label class="">
                <input
                  className="date"
                  type="date"
                  id="start"
                  name="trip-start"
                  min="2022-04-01"
                  max="2031-12-31"
                />
              </label>
              <label className="country">
                <input type="text" placeholder="country" />
              </label>
            </div>
            <div>
              <label>
                <input type="text" placeholder="Gender" />
              </label>
              <label>
                <input
                  class="phone_number"
                  type="number"
                  placeholder="Phone-number"
                />
              </label>
            </div>
            <div>
              <div className="custom-select" style="width:200px;">
                <select>
                  <option value="0">Select car:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
                </select>
              </div>
              <label>
                <input type="text" placeholder="highest qualification" />
              </label>
            </div>
            <div>
              <label>
                <input type="text" placeholder="Availabiity" />
              </label>
              <label>
                <input type="button" value="Save" className="formButton" />
              </label>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
