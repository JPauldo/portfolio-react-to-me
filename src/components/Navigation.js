// import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (<nav>
    <a 
      href="#About"
      onClick={() => handlePageChange('')}
      className={currentPage}>About Me</a>
    <a 
      href="#Portfolio"
      onClick={() => handlePageChange('')}
      className={currentPage}>Portfolio</a>
    <a 
      href="#Contact"
      onClick={() => handlePageChange('')}
      className={currentPage}>Contact</a>
    <a 
      href="#Resume"
      onClick={() => handlePageChange('')}
      className={currentPage}>Resume</a>
  </nav>);
}

export default Navigation;
