/* 
** NavButton.jsx;
*/ 

import { Button } from '@mui/material';
import { memo } from 'react';
import PropTypes from 'prop-types';

export const NavButton = memo((props) => {
  // props
  const {onClick, icon, text} = props;
  // Context
  // hooks
  // State
  // function
  return (
    <>
    <Button onClick={onClick} variant="outlined" startIcon={icon}>{text}</Button>
    </>
  );
});
NavButton.displayName = 'NavButton';
NavButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.string
};