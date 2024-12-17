import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { LoginForm } from '../components/LoginForm';

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
