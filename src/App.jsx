import React from 'react';
import {Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/Home'; 
import Navbar from './component/Navbar';
import About from './component/About';
 import CardDetail from './component/CardDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route path="/CardDetail/:id" element={<CardDetail />} /> 
      
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
