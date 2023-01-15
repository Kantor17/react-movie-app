import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../globals.css';
import Home from '../pages/Home/Home';
import About from 'pages/About/About';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
