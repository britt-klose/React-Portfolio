import React from 'react';

// Here we destructure our props into their own distinct variables
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='navcontent'>
    <ul className="nav nav-tabs" id='navtest'>
      <li className="nav-item">
        <a id="nav-link"
          href="#about"
          onClick={() => handlePageChange('About')}
      
          //checks is current pg home? if so make the nav link active. if not, nav link is not active
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a id="nav-link"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        
          //is the current pg the ABOUT pg/sect? if so make nav link active, if not link is not active
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a id="nav-link"
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a id="nav-link"
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    <br/>
    <br/>
    </div>
    
  );
}

export default NavTabs;
