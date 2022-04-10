import React, { Component } from 'react';
import './App.css';
import NavBar from './user-components/NavBar/NavBar';
import Header from './user-components/Header/Header';
import Body from './user-components/Body/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
