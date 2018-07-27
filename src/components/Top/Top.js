import React from 'react';
import './Top.css';
import Logo from '../../assets/imgs/udacity.svg';

const Top = () => (
  <header className="top">
    <h1 className="top-title">
      <img src={Logo} alt="World with markers and paths in it" className="icon"/>
    </h1>
  </header>
);

export default Top;
