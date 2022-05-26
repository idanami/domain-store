import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import LoginPage from "../components/login/LoginPage";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import Profile from "../components/profile/profile";
import LoginContextProvider from "../context/LoginContext";
import LoginRoute from "./LoginRoute";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Header />
            <Routes>
                <Route path='/' element={<Navigate replace to="/login" />} />
                <Route path='/login' element={<LoginRoute><LoginPage /></LoginRoute>} />
                <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
            </Routes>
            <Footer />
        </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;

ReactDOM.render(<AppRouter />, document.getElementById('app'));
