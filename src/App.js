import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './elements/Header'
import Footer from './elements/Footer'
import Content from './content/Content';

function App() {

  return (
    <div className="div-container">
      <Header />

      <Content />

      <Footer />
    </div>
  )
}

export default App