import React from 'react';
import './Footer.css';
import UdacityIcon from '../../assets/imgs/udacity.svg';

/* Get Year */
const year = new Date();

const Footer = () => (
  <footer>
    <p className="made-with">
      Copyright © <span>{year.getFullYear()}</span> - Ivan Silva for <a href="https://www.udacity.com"><img src={UdacityIcon} alt="Udacity" /></a>
    </p>
  </footer>
);

export default Footer;
