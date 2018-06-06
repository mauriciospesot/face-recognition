import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        if(this.props.isSignedIn) {
            return (
                <nav className='sign-out'>
                    <p onClick={() => this.props.onRouteChange('signout')} className='f5 link dib white dim mr3 mr4-ns pointer'>Cerrar sesion</p>
                </nav>
            );
        } else {
            return (
                <nav className='sign-out'>
                    <p onClick={() => this.props.onRouteChange('signin')} className='f5 link dib white dim mr3 mr4-ns pointer'>Iniciar sesion</p>
                    <p onClick={() => this.props.onRouteChange('register')} className='f5 link dib white dim mr3 mr4-ns pointer'>Registrarse</p>
                </nav>
            );
        }
    }
}

export default Navigation;