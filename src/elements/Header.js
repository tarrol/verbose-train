import React from 'react';
import Nav from './Nav'

function Header(){
  return(
    <header style={{top:0}}>
    <h1 style={{display: 'flex', justifyContent: 'center'}}>
      V's Website
    </h1>
    <Nav/>
    </header>
  )
}

export default Header