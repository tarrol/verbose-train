import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home'
import Resume from './Resume'

function Content() {
  return (
    <Router>
      <Routes>
        <Route path='/verbose-train/' element={<Home />} />
        <Route path='/verbose-train/About' element={<About />} />
        <Route path='/verbose-train/Portfolio' element={<Portfolio />} />
        <Route path='/verbose-train/Contact' element={<Contact />} />
        <Route path='/verbose-train/Resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default Content;