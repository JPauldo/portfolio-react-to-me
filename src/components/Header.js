import React from 'react';
// import Navigation from './Navigation';

function Header({ currentPage, handlePageSwitch }) {
  return (
  <header className="hero is-medium is-link is-fluid">
    <section className="hero-body">  
      <p className="title">Justin Pauldo</p>
      {/* <Navigation currentPage={ currentPage } handlePageSwitch={ handlePageSwitch } /> */}
    </section>
  </header>);
}

export default Header;
