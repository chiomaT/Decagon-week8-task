import React from 'react';
import ApplicationForm from './Components/ApplicationForm'
import './App.css';
import Header from './Components/Admin/Header';
import Input from './Components/Admin/Input';
import Container from './Components/Admin/Container';
import Footer from './Components/Admin/Footer';
import LoginAndSignUp from './Components/Admin/Login';
import Form from './Components/Admin/Form';


function App() {
  return (
    <div className="App">
      <ApplicationForm />
      <LoginAndSignUp />
      <ApplicationForm />
      <Header />
      <Input />
      <Container />
      <Footer />
      <ApplicationForm />
      <Form />
    </div>
  );
}

export default App;
