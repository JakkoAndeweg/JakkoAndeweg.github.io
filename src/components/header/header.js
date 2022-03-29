import React, { Component } from 'react';
import logo from './stimular.png';


function Header() {
  return (
    <div className="navbar">
      <img id='logo' src = {logo}></img>
    </div>
  );
}

export default Header;