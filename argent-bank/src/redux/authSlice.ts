import { createSlice } from '@reduxjs/toolkit';
import { loginUser, fetchUserProfile, updateUserProfile } from './authActions';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  userName: string | null;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  userProfile: User | null;
  isEditingProfile: boolean;
}

// État initial
const initialState: AuthState = {
  token: null, // Token est maintenant géré par redux-persist
  isAuthenticated: false,
  loading: false,
  error: null,
  userProfile: null,
  isEditingProfile: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    startProfileEdit: (state) => {
      state.isEditingProfile = true;
    },
    cancelProfileEdit: (state) => {
      state.isEditingProfile = false;
    },
  },
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
        state.userProfile = action.payload;
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
        state.userProfile = action.payload;
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
