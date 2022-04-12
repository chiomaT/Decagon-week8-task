import React, { useEffect } from 'react';
import Employer from './Components/Employer/Employerjs';
import './App.css';
import Footer from './Components/Admin/Footer';
import LoginAndSignUp from './Components/Admin/Login';
import CompanyLoginPage from "./Components/login-folder/CompanyLogin";
import ApplicationForm from "./Components/ApplicationForm";
import JobApplications from "./Components/JobCreationForm";
import NavBar from "./user-components/NavBar/NavBar";
import Body from "./user-components/Body/Body";
import Header from "./Components/Admin/Header";
import Input from "./Components/Admin/Input";
import Container from "./Components/Admin/Container";
import Footer from "./Components/Admin/Footer";

function App() {
  return (
    <div className="App">
      <LoginAndSignUp />
      <Employer />
      <CompanyLoginPage />
      <NavBar />
      <Header />
      <Body />
      <Input />
      <Container />
      <Footer />
      <ApplicationForm />
      <JobApplications />
    </div>
  );
}

export default App;
