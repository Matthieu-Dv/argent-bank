import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// We expose the store in the browser console for debugging, but only in non-production mode
// Use store.getState() to view the current state in the browser console
if (process.env.NODE_ENV !== 'production') {
  (window as any).store = store;
}

//Typage du store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
