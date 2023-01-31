import React from "react";
import Navigation from './Navigation';

function Header({ currentPage, handlePageSwitch }) {
  return (
    <header className="hero is-info">
      <Navigation currentPage={ currentPage } handlePageChange={ handlePageSwitch } />
    </header>
  );
}

export default Header;
