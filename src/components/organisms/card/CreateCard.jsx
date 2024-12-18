/* 
** CreateCard.jsx;
*/ 

import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import './Card.css';

export const CreateCard = memo((props) => {
  // props
  const { onClick, icon, text } = props;
  // Context
  // hooks
  // State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // function
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div className="c-createCard">
        <div className="c-createCaard_container">
          <div className="c-createCard_title">
            <h2>記事を投稿する</h2>
          </div>
          <div className="c-createCard_input">
            <p>タイトル</p>
            <input type="text" placeholder="タイトルを記入" id="title" onChange={onChangeTitle} value={title}/>
          </div>
          <div className="c-createCard_textarea">
            <p>内容</p>
            <textarea placeholder="投稿内容を記入" id="content" onChange={onChangeContent} value={content}></textarea>
          </div>
          <div className="c-createCard_button">
            <PrimaryButton onClick={onClick} icon={icon} text={text}/>
          </div>
        </div>
      </div> 
    </>
  );
});
CreateCard.displayName = 'CreateCard';
CreateCard.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.string,
};