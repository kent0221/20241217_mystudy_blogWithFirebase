/* 
** Login.jsx;
*/ 

import { memo } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

import { HeaderLayout } from '../tmplates/HeaderLayout';
import { LogCard } from '../organisms/card/LogCard';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../Firebase';
import { useLoginContext } from '../../provider/LoginContext';
// import PropTypes from 'prop-types';

export const Login = memo(() => {
  // props
  // Context
  const { setLoginUser, setIsAuth } = useLoginContext();
  // hooks
  const navigate = useNavigate();
  // State
  // function
  const onClickLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setLoginUser(user);
      setIsAuth(true);
      localStorage.setItem('isAuth', true);
      localStorage.setItem('loginUserID', user.uid);

      navigate('/');
    }).catch((error) => {
      const errorMessage = error.message;
      console.error('エラーメッセージ：', errorMessage);
    });    
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