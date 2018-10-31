import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Status from './components/Status';
import Session from './components/Sessions';

class App extends Component {
  state= {
    status: "awal-status"
  }

  showStatus = () => {
    this.setState(state=>{
      switch(state.status) {
        case 'awal-status':
          return {status: 'show-status' }
        case 'show-status':
          return {status: 'hidden-status'}
        default:
          return {status: 'show-status'}
      }
    })
  }

  render() {
    const { status } = this.state
    return (
      <div className="container">
        <Sidebar />
        <Header style={status} show={this.showStatus} />
        <Status style={status} />
        <Session />
      </div>
    );
  }
}

export default App;
