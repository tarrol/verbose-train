import React from 'react';

function Nav() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    color: 'lightblue',
  }
  return (
    <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
      <ul style={style}><a href='/verbose-train/about'>About</a></ul>
      <ul style={style}><a href='/verbose-train/contact'>Contact</a></ul>
      <ul style={style}><a href='/verbose-train/portfolio'>Portfolio</a></ul>
      <ul style={style}><a href='/verbose-train/resume'>Resume</a></ul>
    </nav>
  )
}

export default Nav