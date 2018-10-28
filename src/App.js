import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Status from './components/Status';
import Session from './components/Sessions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <Status />
        <Session />
      </div>
    );
  }
}

export default App;
