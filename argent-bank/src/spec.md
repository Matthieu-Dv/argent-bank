

après Login , on arrive sur le composant Profil

dans Profil qui utilise ProfileModif on doit avoir le nom de l'utilisateur récupéreé de l'api 
http://localhost:3001/api/v1/user/profile
avec un axios get , la réponse est 

{
  "status": 200,
  "message": "Successfully got user profile data",
  "body": {
    "email": "tony@stark.com",
    "firstName": "Tony",
    "lastName": "Stark",
    "userName": "string",
    "createdAt": "2024-11-04T19:29:14.239Z",
    "updatedAt": "2024-11-20T08:35:55.751Z",
    "id": "6729208a2db1ed7eb4d2bab2"
  }
}

ce nom d'utilisateur "userName" récupéré de cette réponse doit s'afficher donc apparaitre userName props de ProfileModif 

const Profile: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <ProfileModif userName=''/>
        {/* Passer les données des comptes au composant Account */}
        <Account accounts={accountsData} />
      </main>
      <Footer />
    </>
  );
};

export default Profile;

Ensuite dans Navigation , une fois connecté, il faut transformer "sign in  "sign out " une fois connecté 

import React from 'react';
import logo from '../img/argentBankLogo.webp';
import { NavLink } from 'react-router-dom';



const Navigation: React.FC = () => {
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
