import React, { createContext, useReducer } from "react";
import { getUserFromCookie } from "../cookies/cookies";
import userDataReducer, { userDataInitialState } from "../reducer/userDataReducer";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const cookieUserData = getUserFromCookie();
    const [userData, dispatchUserData] = useReducer(userDataReducer, cookieUserData || userDataInitialState);

    return (
        <LoginContext.Provider value={{userData, dispatchUserData}}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;
