import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


function App() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <Router>
      <div className={`App  ${navOpened ? 'appScrollLocked' : ''}`}>
        <Header navOpened={navOpened} setNavOpened={setNavOpened} />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
