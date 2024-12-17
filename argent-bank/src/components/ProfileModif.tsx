import React from 'react';
import { startProfileEdit } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

interface ProfileModifProps {
  firstName: string;
  userName: string;
}

const ProfileModif: React.FC<ProfileModifProps> = ({ firstName, userName }) => {

  const dispatch: AppDispatch = useDispatch();

  // We handle the click event to start editing the profile
  const handleEditClick = () => {
    dispatch(startProfileEdit());
  };

  return (
    <section>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${userName} `}{/* Afficher le nom complet de l'utilisateur */}
        </h1>
        <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
      </div>
    </section>
  );
};

export default ProfileModif;
