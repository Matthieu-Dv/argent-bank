import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/v1';

// Interface pour un utilisater User
interface User {
  email: string;
  firstName: string;
  lastName: string;
  userName: string | null;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Typage de l'état initial
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  userProfile: User | null;
  isEditingProfile: boolean; //gére l'edition du profil où on peut changer le userName utilisateur
}

// On extrait le token du localStorage ou du sessionStorage
const tokenFromStorage =
  localStorage.getItem('token') || sessionStorage.getItem('token');

const initialState: AuthState = {
  token: tokenFromStorage ? tokenFromStorage : null,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
  error: null,
  userProfile: null, // Initialement le profil n'est pas chargé
  isEditingProfile: false, // Initialement on n'est pas en mode édition
};

// AsyncThunk pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    credentials: { email: string; password: string; rememberMe: boolean },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/login`,
        credentials
      );
      const token = response.data.body.token;

      // On stocke le token dans le localStorage ou le sessionStorage
      if (credentials.rememberMe) {
        localStorage.setItem('token', token); // Stockage du token dans le localStorage si rememberMe est coché
      } else {
        sessionStorage.setItem('token', token); // Stockage du token dans le sessionStorage si rememberMe n'est pas coché
      }

      return token;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        'La connexion a échoué. Veuillez vérifier vos identifiants.'
      );
    }
  }
);

// AsyncThunk pour la déconnexion de l'utilisateur
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  // We use the token to retrieve the user's profile; the underscore indicates an unused parameter
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue('Le token est vide');
    }
    try {
      const response = await axios.get(`${API_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.body; // Returns the user's profile data
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        'Échec de la récupération du profil utilisateur..'
      );
    }
  }
);

// AsyncThunk for updating the user profile
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  // We update only the userName here
  async (userName: string, { getState, rejectWithValue }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;
    try {
      const response = await axios.put(
        `${API_BASE_URL}/user/profile`,
        { userName }, // We send only the userName to update
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.body; // Returns the updated profile data
    } catch (error) {
      console.error(error);
      return rejectWithValue('Échec de la mise à jour du profil utilisateur.');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // Here we clear the token and reset authentication status
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token'); // Remove token from localStorage
      sessionStorage.removeItem('token'); // Remove token from sessionStorage
    },
    // We add an action to enable/disable profile edit mode
    startProfileEdit: (state) => {
      state.isEditingProfile = true;
    },
    cancelProfileEdit: (state) => {
      state.isEditingProfile = false;
    },
  },

  /* We add extraReducers here to handle async actions
     We handle three cases: pending, fulfilled, and rejected
  */

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload; // Store the user's profile data
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload; // Update the profile with new data
        state.loading = false;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, startProfileEdit, cancelProfileEdit } =
  authSlice.actions;
export default authSlice.reducer;
