/* 
** Page404.jsx;
*/ 

import { memo } from 'react';

import { HeaderLayout } from '../tmplates/HeaderLayout';
import './Pages.css';

export const Page404 = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <HeaderLayout>
        <div className="c-page404">
          <p className='c-page404_message'>指定したURLが存在しません</p>
        </div>
      </HeaderLayout>
    </>
  );
});
Page404.displayName = 'Page404';
