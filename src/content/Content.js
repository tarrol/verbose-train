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
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default Content;