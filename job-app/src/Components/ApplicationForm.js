import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

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
        <input className="phoneNumber" type="phone" />
        <div />
        <input className="Application-btn" type="submit" value="Submit Application" />
      </form>
    </div>
  )
}

export default application;