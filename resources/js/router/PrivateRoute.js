import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { LoginContext } from '../context/LoginContext';

const PrivateRoute = ({children }) => {
    const {userData} = useContext(LoginContext)

    return !!userData.user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

