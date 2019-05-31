import React, { useContext } from "react";
import Login from '../components/Auth/Login';

import { Redirect } from 'react-router-dom';

import context from '../context';

const Splash = () => {

  const { state } = useContext(context);

  return state.isAuth ? <Redirect to = "/" />: <Login />;
};

export default Splash;
