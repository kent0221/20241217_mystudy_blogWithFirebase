/* 
** Router.jsx;
*/ 
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Logout } from '../components/pages/Logout';
import { CreatePost } from '../components/pages/CreatePost';
import { Page404 } from '../components/pages/Page404';

export const Router = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='logout' element={<Logout/>}/>
          <Route path='createPost' element={<CreatePost/>}/>
          <Route path='*' element={<Page404/>}/>
        </Route>
      </Routes>
    </>
  );
});
Router.displayName = 'Router';
Router.propTypes = {};