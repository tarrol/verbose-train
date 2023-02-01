import React, { useEffect } from "react";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
      }}>
      {pages.map((Page) => (
        <li className={`${currentPage.name === Page.name && "navActive"}`} key={Page.name}>
          <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
        </li>
      ))}
    </nav>
  );
}

export default Nav;
