import React from 'react';

export default function CardAtas(props) {
    return (
        <div className="isi-card-atas">
            <span className="titik">...</span>
            <p>{props.judul}</p>
            <p className="card-tanggal">
            <span>{props.tanggal}</span>
            This month</p>
        </div>
    );
}