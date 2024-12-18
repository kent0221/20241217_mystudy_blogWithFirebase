/* 
** LogCard.jsx;
*/ 

import { memo } from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import './Card.css';

export const LogCard = memo((props) => {
  // props
  const { onClick, icon, text, message } = props;
  // Context
  // hooks
  // State
  // function

  return (
    <>
      <div className="c-logCard">
        <div className="c-logCard_container">
          <div className="c-logCard_text">
            <p>{message}</p>
          </div>
          <div className="c-logCard_button">
            <PrimaryButton onClick={onClick} icon={icon} text={text}/>
          </div>
        </div>
      </div> 
    </>
  );
});
LogCard.displayName = 'LogCard';
LogCard.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.string,
  message: PropTypes.string,
};