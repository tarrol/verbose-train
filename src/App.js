import React, { useState } from 'react';
import Header from './elements/Header'
import Footer from './elements/Footer'
import Page from './content/Page'
import Nav from './elements/Nav'

function App() {
  const [pages] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="div-container">
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  )
}

export default App