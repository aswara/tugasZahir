import React, { Component } from 'react';
import user from './asset/user.jpeg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="find">
                    <input type="text" placeholder="Find a user, team, meeeting..."/>
                </div>
                <div className="user">
                    <a className="tombol" href="#">Invite</a>
                    <img src={user} alt="user"/>
                </div>
            </div>
        );
    }
}

export default Header;