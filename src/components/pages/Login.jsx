/* 
** Login.jsx;
*/ 

import { memo } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

import { HeaderLayout } from '../tmplates/HeaderLayout';
import { LogCard } from '../organisms/card/LogCard';
// import PropTypes from 'prop-types';

export const Login = memo(() => {
  // props
  // Context
  // hooks
  const navigate = useNavigate();
  // State
  // function
  const onClickLogin = () => {
    navigate('/');
  };
  return (
    <>
      <HeaderLayout>
        <LogCard onClick={onClickLogin} icon={<GoogleIcon/>} text='Googleでログイン' message='ログインする'/>
      </HeaderLayout>
    </>
  );
});
Login.displayName = 'Login';
Login.propTypes = {};