import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CompanyLoginPage from './Routes/Login/CompanyLogin';
import User from './Routes/User/User';
import JobCreationForm from './Routes/Form/JobCreationForm';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<CompanyLoginPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/post_job" element={<JobCreationForm />} />
      </Routes>
    );
  }
}
