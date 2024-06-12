import React from 'react';
import './logoconnect.scss'
import logo from './img/logo_connect.png'
import { Link } from 'react-router-dom'

const LogoConnect = () => {
    return (
            <div  className='logo_connect_container'>
            <Link className='link_logo_connect'  to="/">
                <img src={logo} alt="Logo" />
                <h1 className='logo_title_connect' >Make It</h1>
            </Link>
        </div>
        
    );
};

export default LogoConnect;