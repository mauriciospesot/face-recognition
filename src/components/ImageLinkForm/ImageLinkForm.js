import React, { Component } from 'react';
import './ImageLinkForm.css';


class ImageLinkForm extends Component {
    render() {
        return(
            <div>
                <p className='f3 white'>
                    {'Esta aplicacion detectará rostros en tus imagenes. Coloca debajo un link de una imagen y haz una prueba!.'}
                </p>
                <div className='center'>
                    <div className='form pa4 br3 shadow-5 center'>
                        <input className='f4 w-70 center' type="text" onChange={this.props.onInputChange}/>
                        <button className='f6 mv1 link dim br2 ph4 pv2 dib dark-gray bg-near-white' onClick={this.props.onButtonSubmit}>Detectar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageLinkForm;