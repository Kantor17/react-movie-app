import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../globals.css';
import Home from '../pages/Home/';
import About from '../pages/About/';
import PageNotFound from '../pages/PageNotFound/';
import Ideas from '../pages/Ideas/';
import MovieInfo from 'pages/MovieDetails';
import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/details" element={<MovieInfo />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
