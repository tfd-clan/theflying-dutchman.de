import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
        <div className="title">
            <a href="/"><img src="/img/logo.png" width="auto" height="80"/></a>
            <h1>The Flying Dutchman</h1>
        </div>
        <div className="topnav">
            <a href="/about">
                Who are we?
            </a>
            <a href="/join" id="member-button">
                Join Us!
            </a>
        </div>
    </header>
  );
}

export default Header;
