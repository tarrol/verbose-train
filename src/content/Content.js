import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home'

function Content() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<About />} />
          <Route path='/' element={<Portfolio />} />
          <Route path='/' element={<Contact />} />
          {/* <Route path='/' element={<Resume />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default Content;