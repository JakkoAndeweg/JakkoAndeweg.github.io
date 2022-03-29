import React, { Component } from 'react';
import logo from './stimular.png';


function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src = {logo}></img>
      </header>
    </div>
    );
  }

export default Header;