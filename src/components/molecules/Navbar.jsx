/* 
** Navbar.jsx;
*/ 

import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { NavData } from '../data/NavData';
import './Navbar.css';
import { useLoginContext } from '../../provider/LoginContext';
// import PropTypes from 'prop-types';

export const Navbar = memo(() => {
  // props
  // Context
  const { isAuth } = useLoginContext();
  // hooks
  // State
  // function
  const navigate = useNavigate();

  return (
    <>
       <nav className="c-nav">
        <ul className="c-nav_list">
          {NavData.map((data)=>{
            return (
              (isAuth && data.isLogin) || (!isAuth && data.isLogout) ? (
                <li key={data.id} className="c-nav_listItem">
                  <PrimaryButton onClick={()=>{navigate(data.path)}} icon={data.icon} text={data.text}/>
                </li>
              ) : (
                null
              )
            )
          })}
        </ul>
       </nav>
    </>
  );
});
Navbar.displayName = 'Navbar';
Navbar.propTypes = {};
