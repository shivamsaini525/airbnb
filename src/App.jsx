import React from 'react';
import {Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/Home'; // Corrected path
import Navbar from './component/Navbar'; // Corrected path
import About from './component/About'; // Corrected path
import './App.css';

function App() {
  return (
    <BrowserRouter> {/* Wrap everything with Router */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
