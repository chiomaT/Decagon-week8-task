
import React from "react";
import ApplicationForm from "./Components/ApplicationForm";
// import "./App.css";


import JobApplications from "./Components/JobCreationForm"
import './App.css';
import Header from './Components/Admin/Header';
import Input from './Components/Admin/Input';
import Container from './Components/Admin/Container';
import Footer from './Components/Admin/Footer';
import LoginAndSignUp from './Components/Admin/Login';


function App() {
  return (
    <div className="App">
      <LoginAndSignUp />
      <ApplicationForm />
      <Header />
      <Input />
      <Container />
      <Footer />
      <ApplicationForm />
      <JobApplications />

    </div>
  );
}

export default App;
