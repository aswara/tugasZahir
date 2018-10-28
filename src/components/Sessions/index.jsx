import React, { Component } from 'react';
import CardAtas from './CardAtas';
import './sessions.css';
import ListUser from './ListUser';
import Export from './Export';

class Session extends Component {
    state = {
        tampilan: "card",
        export: "hidden"
    }

    tampilanCard = () => {
        this.setState({ tampilan: "card" })
    }

    tampilanTable = () => {
        this.setState({ tampilan: "table" })
    }

    export = () => {
        this.setState({ export: "show" })
    }

    hidden = () => {
        this.setState({ export: "hidden" })
    }

    render() {
        return (
            <div className="session">
                <Export hidden={this.hidden} style={this.state.export}  />
                <div className="judul">
                   <div className="judul-session">
                    <h1>Sessions</h1>
                    <a className="tombol" onClick={this.export} href="#">Export</a>
                   </div>
                   <div className="card-table">
                    <a className={this.state.tampilan == "card" && "pilih"} onClick={this.tampilanCard} href="#">Cards</a>
                    <a className={this.state.tampilan == "table" && "pilih"} onClick={this.tampilanTable} href="#">Table</a>
                   </div>
                </div>

                <div className="card-atas">
                    <CardAtas judul="Number of sessions" tanggal="23" />
                    <CardAtas judul="Users who haven't answered" tanggal="06" />
                </div>

                <div className="tanggal-hari">
                    <p><span className="tanggal">14</span><span className="th">th</span> Tuesday</p>
                    <hr/>
                </div>

                <div className={this.state.tampilan}>
                    <ListUser />
                    <ListUser />
                    <ListUser />
                </div>

            </div>
        );
    }
}

export default Session;