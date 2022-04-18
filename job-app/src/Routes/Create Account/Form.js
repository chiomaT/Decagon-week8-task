import React from 'react';
import './Form.css';
import Header from './Header';
import Footer from './Footer';

const Form = () => {
  return (
    <div>
      <Header />
      <div class="header-text">
        <h2>Create a Job Seeker Account </h2>
        <p>Your new career is one click away</p>
      </div>
      <div class="contact-form-card">
        <div class="personalDetails">
          <h3>Personal Information</h3>
          <p>personal details pertaining to your personal account</p>
        </div>
        <div class="form-group">
          <form action="https://">
            <div>
              <label className="forms">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  class="inputFirstname"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  class="inputLastname"
                />
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
                  class="date"
                  type="date"
                  id="start"
                  name="trip-start"
                  min="2022-04-01"
                  max="2031-12-31"
                />
              </label>
              <label class="country">
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
              <div class="custom-select" style={{ width: 200 }}>
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
                <input type="button" value="Save" class="formButton" />
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
