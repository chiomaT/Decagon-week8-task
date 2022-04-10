
import React from "react";
import ApplicationForm from "./Components/ApplicationForm";
// import "./App.css";
import CompanyLoginPage from "./Components/login-folder/CompanyLogin";
import React from 'react';
import ApplicationForm from './Components/ApplicationForm'
import JobApplications from "./Components/JobCreationForm"
import './App.css';

function App() {
  return (
    <div className="App">
      <ApplicationForm />
      <JobApplications />
    </div>
  );
}

export default App;
