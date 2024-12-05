import React from 'react';

interface ProfileModifProps {
  userName: string;
}

const ProfileModif: React.FC<ProfileModifProps> = ({ userName }) => {
  return (
    <section>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName} {/* Afficher le nom complet de l'utilisateur */}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
    </section>
  );
};

export default ProfileModif;
