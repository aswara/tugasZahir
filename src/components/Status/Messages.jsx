import React from 'react';

export default function Messages(props) {
    return (
        <div className="pesan">
            <hr className={props.style === "aktif" ? "aktif-hr" : ""} />
            <h5>{props.jam}</h5>
            <p className={props.style === "coret" ? "coret" : ""}>{props.pesan}</p>
            {
                props.style === "aktif" && 
                <div className="aktif">
                    <span className="accept"><i className="demo-icon icon-ok">&#xe801;</i> Accept</span>
                    <span className="view">View Event</span>
                </div>
            }
        </div>
    );
}