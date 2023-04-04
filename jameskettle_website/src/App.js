import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Writing from './components/Writing';
import Music from './components/Music';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Writing" element={<Writing />} />
          <Route path="/Music" element={<Music />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
