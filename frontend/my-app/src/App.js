import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GradioInterface from './GradioInterface';
import About from './About';
import Home from './Home';
import './App.css';
function App() {
  return (
    <Router>
      <div id="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/demo" element={<GradioInterface />} />
        <Route exact path="/results" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;