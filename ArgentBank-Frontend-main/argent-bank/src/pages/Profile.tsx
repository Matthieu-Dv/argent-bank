import React from 'react';
import Navigation from '../compenants/Navigation';
import Footer from '../compenants/Footer';
import Account from '../compenants/Account';
import ProfileModif from '../compenants/Profile';

// Données des comptes
const accountsData = [
  {
    id: 1,
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    id: 2,
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    id: 3,
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
];

const Profile: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <ProfileModif />
        {/* Passer les données des comptes au composant Account */}
        <Account accounts={accountsData} />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
