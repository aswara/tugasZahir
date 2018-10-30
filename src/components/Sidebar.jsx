import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './asset/logo.svg'


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                 <img className="logo" src={logo} alt="logo"/>
                 <div className="icon">
                    <NavLink activeClassName="nav-aktif" to="/other"><i className="demo-icon icon-database">&#xe809;</i></NavLink>
                    <NavLink activeClassName="nav-aktif" to="/"><i className="demo-icon icon-users">&#xe802;</i></NavLink>
                    <NavLink activeClassName="nav-aktif" to="/other"><i className="demo-icon icon-users-calender">&#xe800;</i></NavLink>
                    <NavLink activeClassName="nav-aktif" to="/other"><i className="demo-icon icon-file">&#xe804;</i></NavLink>
                    <NavLink activeClassName="nav-aktif" to="/other"><i className="demo-icon icon-pesan">&#xe803;</i> </NavLink>
                    <NavLink activeClassName="nav-aktif" to="/other"> <i className="demo-icon icon-settings">&#xe805;</i></NavLink>                 
                 </div>
            </div>
        );
    }
}

export default Sidebar;