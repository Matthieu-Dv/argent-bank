import React, { useEffect, useState } from 'react';
import logo from '../img/argentBankLogo.webp';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { logout } from '../redux/authSlice';



const Navigation: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();

  // We retrieve the authentication status and user profile from the Redux store
  const { isAuthenticated, userProfile } = useSelector((state: RootState) => state.auth);
  const [userName, setUserName] = useState('');

  // We handle the logout action by dispatching the logout function
  const handleLogout = () => {
      dispatch(logout());
  };

  // Effect to update the userName when the user profile is updated
  useEffect(() => {
      if (isAuthenticated) {
          setUserName(userProfile?.userName || '');
      }
  }, [isAuthenticated, userProfile?.userName]);


  return (
    <header className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div style={{display: 'flex'}}>
        {isAuthenticated ? (
          <>
          <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
            {userName}
          </NavLink>
        <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
        </>
        ) : (
          <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navigation;
