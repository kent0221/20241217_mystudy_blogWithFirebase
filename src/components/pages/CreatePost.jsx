/* 
** CreatePost.jsx;
*/ 

import { memo } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';

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
        <CreateCard icon={<EditNoteIcon/>} text='投稿する'/>
      </HeaderLayout>
    </>
  );
});
CreatePost.displayName = 'CreatePost';
CreatePost.propTypes = {};