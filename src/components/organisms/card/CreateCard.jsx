/* 
** CreateCard.jsx;
*/ 

import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import './Card.css';
import { addDoc, collection } from '@firebase/firestore';
import { auth, db } from '../../../../Firebase';

export const CreateCard = memo((props) => {
  // props
  const { icon, text } = props;
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
  const onClickPost = async () => {
    try {
      const postData = await addDoc(collection(db, 'posts'), {
        title: title,
        content: content,
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        }
      });    
      console.log('保存されたドキュメントID：', postData.id);
    } catch (error) {
      console.error('Firestore保存時にエラー発生：', error);
    } finally{
      setTitle('');
      setContent('');
    }
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
            <PrimaryButton onClick={onClickPost} icon={icon} text={text}/>
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