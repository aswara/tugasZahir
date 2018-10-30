import React, { Component } from 'react';
import lonceng from '../../components/asset/lonceng.svg';
import Message from './Messages';

class Status extends Component {
    render() {
        return (
            <div className={`status ${this.props.style}`} >
                <div className="tanggal">
                    <div className="notifikasi">
                        <img src={lonceng} alt="lonceng"/>
                        <span><p>3</p></span>
                    </div>
                    <div className="cuaca">
                        <h3>Forecast</h3>
                        <p>14 February</p>
                    </div>
                </div>
                <Message style="coret" jam="9:45" pesan="Reply to Debie Wilhelm" />
                <Message style="aktif" jam="9:59" pesan="New invitation from Julie" />
                <Message jam="10:30" pesan="Wireframes with Josh" />
                <Message jam="12:45" pesan="Follow up on Wireframes and Design" />
            </div>
        );
    }
}


export default Status;