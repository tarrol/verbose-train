import React from 'react';

function Nav() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    color: 'blue',
  }
  return (
    <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
      <ul style={style}><a href='/about'>About</a></ul>
      <ul style={style}><a href='/contact'>Contact</a></ul>
      <ul style={style}><a href='/portfolio'>Portfolio</a></ul>
      <ul style={style}><a href='/resume'>Resume</a></ul>
    </nav>
  )
}

export default Nav