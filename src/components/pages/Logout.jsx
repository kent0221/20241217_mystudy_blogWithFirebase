/* 
** Logout.jsx;
*/ 

import { memo } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { HeaderLayout } from '../tmplates/HeaderLayout';
import { LogCard } from '../organisms/card/LogCard';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Firebase';
import { useLoginContext } from '../../provider/LoginContext';
// import PropTypes from 'prop-types';

export const Logout = memo(() => {
  // props
  // Context
  const { setIsAuth, setLoginUser } = useLoginContext();
  // hooks
  const navigate = useNavigate();
  // State
  // function
  const onClickLogout = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      setLoginUser({});
      localStorage.setItem('isAuth', false);
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.error('サインアウトエラー', error);
    });
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