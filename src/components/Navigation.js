// import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar level hero-body">
        <p className="level-item has-text-centered">
          <a 
            className={ currentPage === 'About Me' ? "navbar-item icon-text link is-size-2 has-text-dark" : "navbar-item icon-text link is-size-3" } 
            href="#AboutMe"
            onClick={() => handlePageChange('About Me')}>
            <span className="icon is-small">
              <i className="fa-solid fa-user"></i>
            </span>
            <span>About Me</span>
          </a>
        </p>
        
        <p className="level-item has-text-centered">
          <a 
            className={ currentPage === 'Portfolio' ? "navbar-item icon-text link is-size-2 has-text-dark" : "navbar-item icon-text link is-size-3" } 
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}>
            <span className="icon is-small">
              <i className="fa-regular fa-folder-open"></i>
            </span>
            <span>Portfolio</span>
          </a>
        </p>
        
        <p className="level-item has-text-centered">
          <p className="title is-size-1">Justin Pauldo</p>
        </p>
        
        <p className="level-item has-text-centered">
          <a 
            className={ currentPage === 'Contact' ? "navbar-item icon-text link is-size-2 has-text-black-bis" : "navbar-item icon-text link is-size-3" } 
            href="#Contact"
            onClick={() => handlePageChange('Contact')}>
            <span className="icon is-small">
              <i className="fa-solid fa-phone"></i>
            </span>
            <span>Contact</span>
          </a>
        </p>
        
        <p className="level-item has-text-centered">
          <a 
            className={ currentPage === 'Resume' ? "navbar-item icon-text link is-size-2 has-text-dark" : "navbar-item icon-text link is-size-3" } 
            href="#Resume"
            onClick={() => handlePageChange('Resume')}>
            <span className="icon is-small">
              <i className="fa-regular fa-file"></i>
            </span>
            <span>Resume</span>
          </a>
        </p>
    </nav>
  );
}

export default Navigation;
