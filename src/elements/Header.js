import React from 'react';
import Nav from './Nav'

function Header() {
  return (
    <header style={{ top: 0 }}>
      <a style={{ opacity: 1 }} href='/'><h1 style={{ display: 'flex', justifyContent: 'center' }}>
        V's Website
      </h1></a>
      <Nav />
    </header>
  )
}

export default Header