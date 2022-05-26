import validator from 'validator';
import React, { useContext, useReducer, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import loginReducer, { loginDataInitialState } from "../../reducer/loginReducer";
import { useNavigate } from 'react-router-dom';
import { updateLoginUserNameAction, updateLoginPasswordAction } from '../../actions/loginAction';
import { loginToSite } from '../../server/Auth';
import { loginAction } from '../../actions/userData';
import { saveUserOnCookie } from '../../cookies/cookies';

const LoginForm = (props) => {
    const { dispatchUserData } = useContext(LoginContext);
    const [loginFormData , dispatchLoginFormData ] = useReducer(loginReducer, loginDataInitialState);
    const [emailExsist, setEmailExists] = useState(false);
    const navigate = useNavigate();

    const onClickSubscribe = () => {
        props.setIsLoginMode(false)
    }

    const onInputUsername = (event) => {
        const userName = event.target.value.trim();
        if(userName.length >= 3)
            return dispatchLoginFormData(updateLoginUserNameAction(userName, true));

        return dispatchLoginFormData(updateLoginUserNameAction(userName, false));
    }
    const onInputPassword = (event) => {
        const password = event.target.value.trim();
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(passwordRegex.test(password)){
                return dispatchLoginFormData(updateLoginPasswordAction(password, '', true));
        } else if(password.length === 0)
            return dispatchLoginFormData(updateLoginPasswordAction(password, 'Password is requier', false));

        return dispatchLoginFormData(updateLoginPasswordAction(password, 'Password is invalid', false));
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            setEmailExists(false);
            const userData =  await loginToSite(loginFormData.values.username, loginFormData.values.password);
            if(userData.userNotExist)
                setEmailExists(true);
            else {
                dispatchUserData(loginAction(userData));
                saveUserOnCookie(userData);
                navigate('/home')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="signup-form">
            <h3>Create account</h3>
            <form onSubmit={onSubmitForm}>
                {emailExsist && <div className="error">Incorrect username or password.</div>}
                <div className="input-container">
                    <label>User Name</label>
                    <input
                      type="text"
                      name="username"
                      onInput={onInputUsername}
                    />
                    {!loginFormData.validities.email && <div className="error">{loginFormData.errors.email}</div>}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onInput={onInputPassword}
                    />
                    {!loginFormData.validities.password && <div className="error">{loginFormData.errors.password}</div>}
                </div>
                <div className="submit-container">
                    <button className="button button-submit"
                    disabled={!loginFormData.isFormValid}
                    >Sign In</button>
                    <div onClick={onClickSubscribe}>subscribe</div>
                </div>
            </form>

        </div>
    )
};

export default LoginForm;
