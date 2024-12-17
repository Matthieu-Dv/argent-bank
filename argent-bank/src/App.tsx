import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

export const App: React.FC = () => {
  // We check if the user is authenticated from the Redux state
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        // Si l'utilisateur est authentifié, on redirige vers la page de profil
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Login />}
        />
        // On protège la route du profil
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};
