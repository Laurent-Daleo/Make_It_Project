import React from 'react';
import Logo from '../logo';
import Connexion from '../connexion';
import './topbar.scss'

const Topbar = () => {
    return (
        <nav className='topbar'>
            <Logo />
            <Connexion />
        </nav>
    );
};

export default Topbar;