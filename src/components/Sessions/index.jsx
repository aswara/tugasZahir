import React, { Component } from 'react';
import CardAtas from './CardAtas';
import './sessions.css';
import ListUser from './ListUser';
import Export from './Export';

class Session extends Component {
    state = {
        tampilan: "card",
        export: "hidden",
        dataUser: [
            {
            nama : 'Samuel Spencer',
            email : 'sasp@egament.com',
            pekerjaan : 'Creative Director',
            invites : '03',
            pending : '02',
            warna: "#31baff",
            grafik : [
                {name: 'Page A', value: 1},
                {name: 'Page B', value: 1},
                {name: 'Page C', value: 3},
                {name: 'Page D', value: 2},
                {name: 'Page E', value: 3},
                {name: 'Page F', value: 1},
                {name: 'Page G', value: 4},
                {name: 'Page H', value: 1},
                {name: 'Page I', value: 1}
                ]
            },
            {
                nama : 'Kit Laframboise',
                email : 'kilap@egament.com',
                pekerjaan : 'Data Analysit',
                invites : '07',
                pending : '00',
                warna: '#989898',
                grafik : [
                    {name: 'Page A', value: 2},
                    {name: 'Page B', value: 1},
                    {name: 'Page C', value: 2},
                    {name: 'Page D', value: 3},
                    {name: 'Page E', value: 1},
                    {name: 'Page F', value: 2},
                    {name: 'Page G', value: 3},
                    {name: 'Page H', value: 2},
                    {name: 'Page I', value: 1},
                    ]
            },
            {
                nama : 'Abagael Enno',
                email : 'anhu@egament.com',
                pekerjaan : 'Product Manager',
                invites : '13',
                pending : '05',
                warna : '#fc577a',
                grafik : [
                    {name: 'Page A', value: 1},
                    {name: 'Page B', value: 2},
                    {name: 'Page C', value: 3},
                    {name: 'Page D', value: 2},
                    {name: 'Page E', value: 4},
                    {name: 'Page F', value: 2},
                    {name: 'Page G', value: 1},
                    {name: 'Page H', value: 3},
                    {name: 'Page I', value: 1},

                    ]
            },
        ]
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
                    <a className="tombol" onClick={this.export} href="#"><i className="demo-icon icon-download">&#xf02e;</i> Export</a>
                   </div>
                   <div className="card-table">
                    <a className={this.state.tampilan == "card" ? "pilih" : ""} onClick={this.tampilanCard} href="#"><i className="demo-icon icon-th-large-outline">&#xe807;</i> Cards</a>
                    <a className={this.state.tampilan == "table" ? "pilih" : ""} onClick={this.tampilanTable} href="#"><i className="demo-icon icon-menu-outline">&#xe808;</i> Table</a>
                   </div>
                </div>

                <div className="card-atas">
                    <CardAtas style="biru" judul="Number of sessions" tanggal="23" />
                    <CardAtas style="orange" judul="Users who haven't answered" tanggal="06" />
                </div>

                <div className="tanggal-hari">
                    <p><span className="tanggal">14</span><span className="th">th</span> Tuesday</p>
                    <hr/>
                </div>

                <div className={this.state.tampilan}>
                    {
                        this.state.dataUser.map((user,index)=>
                            <ListUser key={index} user= {user} />
                        )
                    }
                </div>

                    <div className={`tidak-aktif ${this.state.tampilan}`}>
                    {
                        this.state.dataUser.map((user,index)=>
                            <ListUser key={index} user= {user} />
                        )
                    }
                </div>

            </div>
        );
    }
}

export default Session;