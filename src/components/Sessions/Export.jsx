import React, { Component } from 'react';
import './export.css';
import pdf from '../asset/pdf-icon.svg';
import doc from '../asset/doc-icon.svg';
import pptx from '../asset/pptx-icon.svg';
import psd from '../asset/psd-icon.svg';

class Export extends Component {
    hidden = () => {
        this.props.hidden()
    }

    render() {
        return (
            <div className={this.props.style}>
                <div onClick={this.hidden} className="transparant"></div>
                <div onClick={this.export} className="export">
                    <h5>EXPORT</h5>
                    <div className="tipe-file">
                        <div className="file">
                            <img src={doc} alt="doc"/>
                            <p>as Document</p>
                        </div>
                        <div className="file">
                            <img src={pdf} alt="doc"/>
                            <p>as PDF</p>
                        </div>
                        <div className="file">
                            <img src={psd} alt="doc"/>
                            <p>as PSD</p>
                        </div>
                        <div className="file">
                            <img src={pptx} alt="doc"/>
                            <p>as Presentation</p>
                        </div>
                    </div>
                    <h5>Save To</h5>
                    <div className="folder">
                        <span>Folder</span>
                        <span className="tombol" href="#">Send</span>
                    </div>
                    <span className="tombol-export" href="#">Export</span>
                </div>
            </div>
        );
    }
}

export default Export;