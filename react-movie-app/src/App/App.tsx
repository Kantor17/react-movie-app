import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../globals.css';
import Home from '../pages/Home/';
import About from 'pages/About/';
import PageNotFound from 'pages/PageNotFound/';
import Ideas from 'pages/Ideas/';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
