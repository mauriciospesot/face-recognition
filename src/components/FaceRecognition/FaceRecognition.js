import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
    render() {
        return(
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img id='inputimage' src={this.props.imageUrl} width='500px' height='auto' alt=''/>
                <div className='bounding-box' style={{top: this.props.box.topRow, right: this.props.box.rightCol, bottom: this.props.box.bottomRow, left: this.props.box.leftCol}}></div>
                </div>
            </div>
        );
    }
}

export default FaceRecognition;