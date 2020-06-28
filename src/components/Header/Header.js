import React from 'react'
import './Header.css';

import facebookLogo from '../../assets/facebook.png'

export default function Header() {
  return (
    <header id="header">
      <img src={facebookLogo} alt="facebook"/>
      <div>
        <a href="#"><p>Meu perfil</p></a>

      </div>
    </header>
  )
}

