import React from 'react';
import './input_sigin.scss';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputSignIn = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const isEmailValid = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };


    return (
        <div className='signin_input_content'>
        <h2 className='signin_input_title'>Inscription</h2>
        <form action="" className="signin_form">
          <div className='signin_email'>
          <label htmlFor="email">E-mail</label>
          <input 
          name='email'
          required
          type="email" 
          id='email'
          placeholder='Entrer votre adresse mail'
          />
          </div>
          
          <div className='signin_pwd'>
          <label htmlFor="pwd">Mot de passe</label>
          <input 
          name='pwd'
          required
          type={showPassword ? 'text' : 'password'} 
          id='pwd'
          placeholder='Entrer votre mot de passe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="off"
          />

          <span className='eye_pwd' onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
          </div>

          <div className='confirm_signin_pwd'>
          <label htmlFor="confirm_pwd">Confirmation</label>
          <input 
          name='confirm_pwd'
          required
          type={showPasswordConfirm ? 'text' : 'password'} 
          id='confirm_pwd'
          placeholder='Confirmer votre mot de passe'
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          autocomplete="off"
          />
          <span className='eye_pwd' onClick={togglePasswordConfirmVisibility}>
          <FontAwesomeIcon icon={showPasswordConfirm ? faEyeSlash : faEye} />
          </span>
          </div>
          <button className='btn_submit_signin' type='submit'>
          Inscription
          </button>
        </form>

        <p className='alert'></p>
        <p>En continuant avec une adresse e-mail,vous <br />
          acceptez les <Link className='conditions'>Conditions générales</Link> et la <Link className='politique'>Polititique de confidentialité</Link><br />
          de Make It
        </p>
      </div>
    );
};

export default InputSignIn;