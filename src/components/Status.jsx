import React, { Component } from 'react';

class Status extends Component {
    render() {
        return (
            <div className="status">
                <div className="tanggal">
                    <div className="notifikasi">
                        <span>3</span>
                    </div>
                    <h3>Forecast</h3>
                    <p>14 February</p>
                    <div className="pesan">
                        <hr/>
                        <p>9.45</p>
                        <p>Reply to Debie Wilhelm</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Status;