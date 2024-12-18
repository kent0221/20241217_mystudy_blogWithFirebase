/* 
** Page404.jsx;
*/ 

import { memo } from 'react';
import { HeaderLayout } from '../tmplates/HeaderLayout';
// import PropTypes from 'prop-types';

export const Page404 = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <HeaderLayout>
        <p>指定したURLが存在しません</p>
      </HeaderLayout>
    </>
  );
});
Page404.displayName = 'Page404';
Page404.propTypes = {};