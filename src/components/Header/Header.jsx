// import React from 'react';
import './header.css';
import MainLogo from '../MainLogo/MainLogo';
import Nav from '../Nav/Nav';
import BurgerBtn from './BurgerBtn/BurgerBtn';


function Header(props) {

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <BurgerBtn navOpened={props.navOpened} setNavOpened={props.setNavOpened} />
          <MainLogo />
          <Nav navOpened={props.navOpened} setNavOpened={props.setNavOpened} />
        </div>
      </div>
    </header>
  );
}

export default Header;