import React from 'react';
import './signin.scss'
import LogoConnect from '../../components/logoConnect';
import InputSignIn from '../../components/inputSignIn';

const SignIn = () => {
    return (
        <div className='signin_page'>
            <LogoConnect />
            <InputSignIn />
        </div>
    );
};

export default SignIn;