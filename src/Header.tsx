import React, { FC } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  return (
      <header className="topnav">
          <div className="left-header">
            <NavLink to="/">
                  Home
            </NavLink>
            <NavLink to="/creator">
                Creator
            </NavLink>
            <NavLink to="/about">
                Teams
            </NavLink>
          </div>
            <NavLink to="/"><img src="/img/logo.png" width="auto" height="80" className="center-header" /></NavLink>
          <div className="right-header">
            <a href='https://discord.gg/FGKMngN7wC'>
                  Discord
            </a>
            <a href='ts3server://ts.theflying-dutchman.de'>
                Teamspeak
            </a>
            <NavLink to="/join" id="member-button">
                Join Us!
            </NavLink>
          </div>
    </header>
  );
}

export default Header;
