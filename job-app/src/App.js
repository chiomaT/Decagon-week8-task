import React from "react";
import CompanyLoginPage from "./Components/login-folder/CompanyLogin";
import ApplicationForm from "./Components/ApplicationForm";
import JobApplications from "./Components/JobCreationForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CompanyLoginPage />
      <ApplicationForm />
      <JobApplications />
    </div>
  );
}

export default App;
