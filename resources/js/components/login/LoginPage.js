import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginPage = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div className="login-container">
            {
                isLoginMode
                ? <LoginForm setIsLoginMode={setIsLoginMode} />
                : <SignUpForm setIsLoginMode={setIsLoginMode} />
            }
        </div>
    )
};

export default LoginPage;
