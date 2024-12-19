/* 
** PostCard.jsx;
*/ 

import { memo } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import PropTypes from 'prop-types';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../Firebase';

export const PostCard = memo((props) => {
  // props
  const { id, title, content, author } = props;
  // Context

  // hooks
  // State
  // function
  const onClickDelete = async () => {
    try {
      const loginUserID = localStorage.getItem('loginUserID')
      if(author.id === loginUserID){
        await deleteDoc(doc(db, 'posts',id))
      }
    }catch(error){
      console.error('削除時にエラー発生：', error);
    } finally {
      window.location.href = '/';
    }
  };
  
  return (
    <>
      <div className="c-postCard">
        <div className="c-postCard_title">
          <h2>{title}</h2>
        </div>
        <div className="c-postCard_content">
          <p>{content}</p>
        </div>
        <div className="c-postCard_bottom">
          <div className="c-postCard_author">
            <span>{author.username}</span>
          </div>
          <div className="c-postCard_button">
            <PrimaryButton onClick={onClickDelete} icon={<DeleteIcon/>} text='削除' />
          </div>
        </div>
      </div>       
    </>
  );
});
PostCard.displayName = 'PostCard';
PostCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.object,
};