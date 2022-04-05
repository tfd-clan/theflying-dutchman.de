import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Join from './Join';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/join' element={<Join/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
