/* 
** HeaderLayout.jsx;
*/ 

import { memo } from 'react';
import { Header } from '../organisms/layout/Header';
import PropTypes from 'prop-types';

export const HeaderLayout = memo((props) => {
  // props
  const { children } =props;
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <Header/>
      { children } 
    </>
  );
});
HeaderLayout.displayName = 'HeaderLayout';
HeaderLayout.propTypes = {
  children: PropTypes.node
};