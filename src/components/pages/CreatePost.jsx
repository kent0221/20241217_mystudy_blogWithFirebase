/* 
** CreatePost.jsx;
*/ 

import { memo } from 'react';
import { HeaderLayout } from '../tmplates/HeaderLayout';
import { CreateCard } from '../organisms/card/CreateCard';
// import PropTypes from 'prop-types';

export const CreatePost = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <HeaderLayout>
        <h1>CreatePost</h1>
        <CreateCard/>
      </HeaderLayout>
    </>
  );
});
CreatePost.displayName = 'CreatePost';
CreatePost.propTypes = {};