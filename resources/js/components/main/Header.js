import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutAction } from "../../actions/userData";
import { LoginContext } from "../../context/LoginContext";
import { deleteUserFromCookie } from "../../cookies/cookies";

const Header = () => {
	const { userData, dispatchUserData } = useContext(LoginContext);
	const navigate = useNavigate();

	const onClickLogout = () => {
		dispatchUserData(logoutAction());
		deleteUserFromCookie();
		navigate("/");
	};

    return (
        <div className="header">
            <div className="brand-box">
                {
                    !!userData.user
                    ? <div className="logout" onClick={ onClickLogout }>Logout</div>
                    : <></>
                }
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Domain Store</span>
                </h1>
                {
                    !!userData.user
                    ? (
                        <div className="nav-links">
                            <NavLink to="/profile" className={(data) => data.isActive ? 'nav-link nav-link_animated header__active-link' : 'nav-link nav-link_animated'}>Profile</NavLink>
                            <NavLink to="/home" className={(data) => data.isActive ? 'nav-link nav-link_animated header__active-link' : 'nav-link nav-link_animated'}>Home</NavLink>
                        </div>
                    )
                    : (
                        <div className="nav-links">
                            <NavLink to="/login" className={(data) => data.isActive ? 'nav-link nav-link_animated header__active-link' : 'nav-link nav-link_animated'}>Login</NavLink>
                            <NavLink to="/home" className={(data) => data.isActive ? 'nav-link nav-link_animated header__active-link' : 'nav-link nav-link_animated'}>Home</NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;
