import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import PlatziVideoLogo from '../assets/static/logo-platzi-video.png';
import UserLogo from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={PlatziVideoLogo} alt='Platzi Video' />
    </Link>

    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={UserLogo} alt='user-icon' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><Link to='/login'>Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
