import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Teams from './Teams';
import Join from './Join';
import Creator from './Creator';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/teams' element={<Teams />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/creator' element={<Creator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
