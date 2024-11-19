import React from 'react';
import Navigation from '../compenants/Navigation';
import Footer from '../compenants/Footer';
import LoginForm from '../compenants/LoginForm';

const Login: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default Login;
