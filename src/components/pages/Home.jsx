/* 
** Home.jsx;
*/ 

import { memo } from 'react';
import { HeaderLayout } from '../tmplates/HeaderLayout';
// import PropTypes from 'prop-types';

export const Home = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <HeaderLayout>
        <h1>Home</h1>
      </HeaderLayout>
    </>
  );
});
Home.displayName = 'Home';
Home.propTypes = {};