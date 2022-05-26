import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { LoginContext } from '../context/LoginContext';

const LoginRoute = ({children }) => {
    const {userData} = useContext(LoginContext)

    return !!userData.user ? <Navigate to="/home" /> : children;
};

export default LoginRoute;

