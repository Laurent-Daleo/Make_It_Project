import React from 'react'
import './connect_input.scss'
import { Link } from 'react-router-dom'
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Inputcnx = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='connect_input_content'>
      <h2 className='connect_input_title'>Connexion</h2>
      <form action="" className="connect_form">
        <div className='input_email'>
        <label htmlFor="email">E-mail</label>
        <input 
        name='email'
        required
        type="email" 
        id='email'
        placeholder='Entrer votre adresse mail'
        />
        </div>
        <div className='input_pwd'>
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
        <button className='btn_submit_connect' type='submit'>
            Connexion
        </button>
      </form>
      <Link className='forget_pwd' >
      Mot de passe oublié ?
      </Link>
      <p>En continuant avec une adresse e-mail,vous <br />
        acceptez les <Link className='conditions'>Conditions générales</Link> et la <Link className='politique'>Polititique de confidentialité</Link><br />
        de Make It
      </p>
    </div>
  )
};

export default Inputcnx;