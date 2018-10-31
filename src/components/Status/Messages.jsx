import React from 'react';

export default function Messages(props) {
    const { style, jam, pesan } = props.data
    return (
        <div className="pesan">
            <hr className={style === "aktif" ? "aktif-hr" : ""} />
            <h5>{jam}</h5>
            <p className={style === "coret" ? "coret" : ""}>{pesan}</p>
            {
                style === "aktif" && 
                <div className="aktif">
                    <span className="accept"><i className="demo-icon icon-ok">&#xe801;</i> Accept</span>
                    <span className="view">View Event</span>
                </div>
            }
        </div>
    );
}