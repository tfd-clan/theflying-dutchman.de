import React, { FC } from 'react';
import './App.css';

const Creator: FC = () => {
  return (
    <div>
      <div className='hero-image'>
        <div className='hero-content'>
          <img src="/img/logo.png" width="auto" height="400" />
          <h1>The Flying Dutchman</h1>
        </div>
      </div>
    </div>
  );
}

export default Creator;
