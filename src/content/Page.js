import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home'
import Resume from './Resume'
import Content from './Content'

function Page({ currentPage }) {

  const renderContent = () => {
    switch (currentPage.name) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Home />;
    }
  }
  return (
    <div>
      <h2 style={{ display: 'flex', justifyContent: 'center', }}>{currentPage.name}</h2>
      <Content>{renderContent()}</Content>
    </div>
  );
}

export default Page;