import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Status from './components/Status';

class Other extends Component {
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
            <div>
                <Sidebar />
                <Header style={status} show={this.showStatus} />
                <Status style={status} />
            </div>
        );
    }
}

export default Other;