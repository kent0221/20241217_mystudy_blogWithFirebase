/* 
** Navbar.jsx;
*/ 

import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { NavData } from '../data/NavData';
import './Navbar.css';
// import PropTypes from 'prop-types';

export const Navbar = memo(() => {
  // props
  // Context
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
              <li key={data.id} className="c-nav_listItem">
                <PrimaryButton onClick={()=>{navigate(data.path)}} icon={data.icon} text={data.text}/>
              </li>
            )
          })}
        </ul>
       </nav>
    </>
  );
});
Navbar.displayName = 'Navbar';
Navbar.propTypes = {};
