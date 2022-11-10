import React, { useReducer } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../globals.css';
import Home from '../pages/Home/';
import About from 'pages/About/';
import PageNotFound from 'pages/PageNotFound/';
import Ideas from 'pages/Ideas/';
import { defaultMoviesState, moviesReducer } from 'store/moviesReducer';
import { MoviesContext } from 'store/moviesContext';

function App() {
  const [moviesState, moviesDispatch] = useReducer(moviesReducer, defaultMoviesState);
  return (
    <BrowserRouter>
      <MoviesContext.Provider value={{ moviesState, moviesDispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </MoviesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
