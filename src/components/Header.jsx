import React, { Component } from 'react';
import user from './asset/user.jpeg';

class Header extends Component {
    showStatus = () => {
        this.props.show()
    }

    render() {
        return (
            <div className="header">
                <div className="find">
                    <i className="demo-icon icon-search">&#xe806;</i>
                    <input type="text" placeholder="Find a user, team, meeeting..."/>
                    
                </div>
                <div className="user">
                    <a className="tombol" href="#"><i className="demo-icon icon-paper-plane">&#xe80b;</i> Invite</a>
                    <img src={user} alt="user"/>
                    {
                        this.props.style === "show-status" ? 
                        <i onClick={this.showStatus} className="demo-icon toogle icon-cancel-1">&#xe80c;</i> :
                        <i onClick={this.showStatus} className="demo-icon toogle icon-th-list">&#xe80a;</i>
                    }
                </div>
            </div>
        );
    }
}

export default Header;