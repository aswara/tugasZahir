import React from 'react';
import user from '../asset/user.jpeg';

export default function ListUser(props) {
    return (
        <div className="list-user">
            <div className="data-user">
                <img src={user} alt="user"/>
                <div className="nama">
                    <div>
                    <h4>Samuel</h4>
                    <p className="email">sasp@egament.com</p>
                    </div>
                    <p className="pekerjaan">Creative Director</p>
                </div>
            </div>
            <div className="aktifitas">
                <div className="invites-pending">
                    <div className="invites">
                        <h5>Invites</h5>
                        <h4>03</h4>
                    </div>
                    <div className="pending">
                        <h5>Pending</h5>
                        <span>.</span> <h4>02</h4>
                    </div>
                </div>
                <div className="cart">
                    Overall activity
                </div>
            </div>
        </div>
    );
};