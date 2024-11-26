import React from 'react';
import logo from './img/logo.png'
import './logo.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div  className='logo_content'>
            <Link className='link_logo_topbar'  to="/">
                <img  className='logo_img' src={logo} alt="Logo" />
                <h1 className='logo_title' >Make It</h1>
            </Link>
        </div>
    );
};

export default Logo;