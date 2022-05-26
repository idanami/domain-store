import validator from 'validator';
import React, { useContext, useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { signupReducer, signUpDataInitialState } from "../../reducer/signupReducer";
import {
    updateSignupFirstNameAction, updateSignupEmailAction,
    updateSignupFamilyNameAction, updateSignupPhoneNumberAction,
    updateSignupUserNameAction, updateSignupPasswordAction, signUpEmailExistAction
} from '../../actions/signupAction';
import { subscribeToSite } from '../../server/Auth';
import { saveUserOnCookie } from '../../cookies/cookies';
import { LoginContext } from '../../context/LoginContext';
import { loginAction } from '../../actions/userData';

const SignUpForm = (props) => {
    const { dispatchUserData } = useContext(LoginContext);
    const [signUpFormData , dispatchSignUpFormData ] = useReducer(signupReducer, signUpDataInitialState);
    const navigate = useNavigate();

    const onClickLogin = () => {
        props.setIsLoginMode(true)
    }

    const onInputFirstName = (event) => {
        const firstName = event.target.value.trim();
        if(firstName.length >= 3)
            return dispatchSignUpFormData(updateSignupFirstNameAction(firstName, true));
        dispatchSignUpFormData(updateSignupFirstNameAction(firstName, false));
    }
    const onInputFamilyName = (event) => {
        const familyName = event.target.value.trim();
        if(familyName.length >= 3)
            return dispatchSignUpFormData(updateSignupFamilyNameAction(familyName, true));
        dispatchSignUpFormData(updateSignupFamilyNameAction(familyName, false));
    }
    const onInputEmail = (event) => {
        const email = event.target.value.trim();
        if(validator.isEmail(email))
            return dispatchSignUpFormData(updateSignupEmailAction(email, '', true));
        if(email.length === 0)
            return dispatchSignUpFormData(updateSignupEmailAction(email, 'Email is requier', false));

        dispatchSignUpFormData(updateSignupEmailAction(email, 'Email is invalid', false));
    }
    const onInputPhoneNumber = (event) => {
        const phone = event.target.value;
        if(phone.length === 10 && validator.isMobilePhone(phone))
            return dispatchSignUpFormData(updateSignupPhoneNumberAction(phone, 'Phone Number is requier', true));
        dispatchSignUpFormData(updateSignupPhoneNumberAction(phone, 'Phone Number is invalid', false));
    }
    const onInputUsername = (event) => {
        const userName = event.target.value.trim();
        if(userName.length >= 3)
            return dispatchSignUpFormData(updateSignupUserNameAction(userName, true));
        dispatchSignUpFormData(updateSignupUserNameAction(userName, false));
    }
    const onInputPassword = (event) => {
        const password = event.target.value.trim();
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(passwordRegex.test(password)){
            return dispatchSignUpFormData(updateSignupPasswordAction(password, '', true));
        }
        if(password.length === 0)
            return dispatchSignUpFormData(updateSignupPasswordAction(password, 'Password is requier', false));

        dispatchSignUpFormData(updateSignupPasswordAction(password, 'Password is invalid', false));
    }
    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const userData = await subscribeToSite(
                signUpFormData.values.firstname, signUpFormData.values.familyname, signUpFormData.values.email,
                signUpFormData.values.phone, signUpFormData.values.username, signUpFormData.values.password);
                if(userData.existingEmailCheck)
                    dispatchSignUpFormData(signUpEmailExistAction('Email exist', false));
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
                <div className="input-container">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      maxLength={12}
                      onInput={onInputFirstName}
                    />
                    {!signUpFormData.validities.firstname && <div className="error">{signUpFormData.errors.firstname}</div>}
                </div>
                <div className="input-container">
                    <label>Family Name</label>
                    <input
                      type="text"
                      name="familyname"
                      maxLength={12}
                      onInput={onInputFamilyName}
                    />
                    {!signUpFormData.validities.familyname && <div className="error">{signUpFormData.errors.familyname}</div>}
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onInput={onInputEmail}
                    />
                    {!signUpFormData.validities.email && <div className="error">{signUpFormData.errors.email}</div>}
                </div>
                <div className="input-container">
                    <label>Phone Number</label>
                    <input
                      type="Phone"
                      name="phone"
                      onInput={onInputPhoneNumber}
                    />
                    {!signUpFormData.validities.phone && <div className="error">{signUpFormData.errors.phone}</div>}
                </div>
                <div className="input-container">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      onInput={onInputUsername}
                    />
                    {!signUpFormData.validities.username && <div className="error">{signUpFormData.errors.username}</div>}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onInput={onInputPassword}
                    />
                    {!signUpFormData.validities.password && <div className="error">{signUpFormData.errors.password}</div>}
                </div>
                <div className="submit-container">
                    <button className="button button-submit" disabled={!signUpFormData.isFormValid}>Sign Up</button>
                    <div onClick={onClickLogin}>login</div>
                </div>
            </form>

        </div>
    )
};

export default SignUpForm;
