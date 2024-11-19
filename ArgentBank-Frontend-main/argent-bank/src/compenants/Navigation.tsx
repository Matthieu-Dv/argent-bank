import React from 'react';
import logo from '../img/argentBankLogo.webp';
import { NavLink } from 'react-router-dom';

// Déclaration d'un type pour les props (ici vide mais extensible)
interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
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
      <div>
        <NavLink to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
