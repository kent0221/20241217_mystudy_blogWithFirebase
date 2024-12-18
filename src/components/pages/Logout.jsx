/* 
** Logout.jsx;
*/ 

import { memo } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { HeaderLayout } from '../tmplates/HeaderLayout';
import { LogCard } from '../organisms/card/LogCard';
// import PropTypes from 'prop-types';

export const Logout = memo(() => {
  // props
  // Context
  // hooks
  const navigate = useNavigate();
  // State
  // function
  const onClickLogout = () => {
    navigate('/login');
  };
  return (
    <>
      <HeaderLayout>
        <LogCard onClick={onClickLogout} icon={<LogoutIcon/>} text='ログアウト' message='ログアウトする'/>
      </HeaderLayout>
    </>
  );
});
Logout.displayName = 'Logout';
Logout.propTypes = {};