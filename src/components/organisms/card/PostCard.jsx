/* 
** PostCard.jsx;
*/ 

import { memo } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import PropTypes from 'prop-types';

export const PostCard = memo((props) => {
  // props
  const { title, content, author } = props;
  // Context
  // hooks
  // State
  // function
  const onClickDelete = () => {
    console.log('delete')
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
            <span>{author}</span>
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
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};