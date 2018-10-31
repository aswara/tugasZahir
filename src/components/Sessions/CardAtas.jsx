import React from 'react';

export default function CardAtas(props) {
    const { judul, style, tanggal } = props.data
    return (
        <div className="isi-card-atas">
            <span className="titik">...</span>
            <p>{judul}</p>
            <p className="card-tanggal">
            <span className={style}>{tanggal}</span>
            This month</p>
        </div>
    );
}