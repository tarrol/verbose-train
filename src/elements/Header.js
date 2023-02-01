import React, { useState } from 'react';

function Header(props) {
  return (
    <header style={{ top: 0 }}>
      <a style={{ opacity: 1 }} href='/'><h1 style={{ display: 'flex', justifyContent: 'center' }}>
        V's Website
      </h1></a>
      {props.children}
    </header>
  )
}

export default Header