import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="title">
            <NavLink to="/"><img src="/img/logo.png" width="auto" height="80"/></NavLink>
            <h1>The Flying Dutchman</h1>
        </div>
        <div className="topnav">
            <NavLink to="/about">
                Who are we?
            </NavLink>
            <NavLink to="/join" id="member-button">
                Join Us!
            </NavLink>
        </div>
    </header>
  );
}

export default Header;
