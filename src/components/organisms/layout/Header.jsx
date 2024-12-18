/* 
** Header.jsx;
*/ 

import { memo } from 'react';

import { Navbar } from '../../molecules/Navbar';
import './Header.css'
// import PropTypes from 'prop-types';

export const Header = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <header className="c-header">
        <div className="c-header_nav">
          <Navbar/>
        </div>
      </header>
    </>
  );
});
Header.displayName = 'Header';
Header.propTypes = {};