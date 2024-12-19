/**
 * LoginProvider.jsx
 */

import { useState } from "react";
import PropTypes from "prop-types";

import { LoginContext } from "./LoginContext";

export const LoginProvider = (props) => {
  // props
  const { children } = props;
  // State
  const [ loginUser, setLoginUser ] = useState({});
  const [ isAuth, setIsAuth ] = useState(localStorage.getItem('isAuth'));
  // function
  
  return (
      <LoginContext.Provider value={{ loginUser, setLoginUser, isAuth, setIsAuth }}>
       { children }
      </LoginContext.Provider>
  );
};
LoginProvider.propTypes = {
  children: PropTypes.node
};