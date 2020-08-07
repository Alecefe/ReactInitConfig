import React from 'react';
import '../assets/styles/components/Header.scss';
import PlatziVideoLogo from '../assets/static/logo-platzi-video.png';
import UserLogo from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src={PlatziVideoLogo} alt='Platzi Video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={UserLogo} alt='user-icon' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
