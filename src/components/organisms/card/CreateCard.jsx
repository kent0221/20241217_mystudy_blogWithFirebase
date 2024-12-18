/* 
** CreateCard.jsx;
*/ 

import { memo } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';

import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import './Card.css';
// import PropTypes from 'prop-types';

export const CreateCard = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  const onClickPost = () => {
    console.log('Post')
  };
  return (
    <>
      <div className="c-createCard">
        <div className="c-createCard_title">
          <h2>記事を投稿する</h2>
        </div>
        <div className="c-createCard_input">
          <p>タイトル</p>
          <input type="text" placeholder="タイトルを記入" id="title" value=''/>
        </div>
        <div className="c-createCard_textarea">
          <p>内容</p>
          <textarea placeholder="投稿内容を記入" id="content" value=''></textarea>
        </div>
        <div className="c-createCard_button">
          <PrimaryButton onClick={onClickPost} icon={<EditNoteIcon/>} text='投稿する'/>
        </div>
      </div> 
    </>
  );
});
CreateCard.displayName = 'CreateCard';
CreateCard.propTypes = {};