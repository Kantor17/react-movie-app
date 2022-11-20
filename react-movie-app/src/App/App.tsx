import React, { useReducer } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../globals.css';
import Home from '../pages/Home/';
import About from '../pages/About/';
import PageNotFound from '../pages/PageNotFound/';
import Ideas from '../pages/Ideas/';
import { globalReducer } from '../store/globalReducer';
import { defaultGlobalState, GlobalContext } from 'store/globalContext';

function App() {
  const [globalState, globalDispatch] = useReducer(globalReducer, defaultGlobalState);
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ globalState, globalDispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
