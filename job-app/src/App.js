import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CompanyLoginPage from './Routes/Login/CompanyLogin';
import AdminLogin from './Routes/Admin/Login/AdminLogin';
import User from './Routes/User/User';
import JobCreationForm from './Routes/Form/JobCreationForm';
import ApplicationForm from './Routes/Form/ApplicationForm';
import Employerjs from './Routes/Employer/Employerjs';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<CompanyLoginPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user/employer" element={<Employerjs />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/post_job" element={<JobCreationForm />} />
        <Route path="/user/apply" element={<ApplicationForm />} />
      </Routes>
    );
  }
}
