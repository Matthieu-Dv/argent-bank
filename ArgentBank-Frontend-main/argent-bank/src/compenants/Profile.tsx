import React from 'react';

// Déclaration d'un type pour les props (ici vide mais extensible)
interface ProfileModifProps {}

const ProfileModif: React.FC<ProfileModifProps> = () => {
  return (
    <section>
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
    </section>
  );
};

export default ProfileModif;
