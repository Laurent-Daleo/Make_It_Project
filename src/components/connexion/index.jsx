import React from 'react';
import './connexion.scss'
import { Link } from 'react-router-dom'

const Connexion = () => {
    return (
        <div className='connexion_content'  >
            <Link to='/SignUp' >
                <div className='connect'>Connexion</div>
            </Link>
            <Link to='/SignIn' >
            <div className='subscribe'>S'incrire</div>
            </Link>
        </div>
    );
};

export default Connexion;