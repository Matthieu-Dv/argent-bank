import React from 'react';
import { NavLink } from 'react-router-dom';

// Déclaration d'un type pour les props (si nécessaire, ici non utilisé)
interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <NavLink to="/profil" className="sign-in-button">
          Sign In
        </NavLink>
      </form>
    </section>
  );
};

export default LoginForm;
