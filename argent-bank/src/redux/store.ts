import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilise localStorage par défaut
import authReducer from './authSlice';

// Configuration de redux-persist
const persistConfig = {
  key: 'auth', // La clé sous laquelle les données seront stockées
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore les actions spécifiques à redux-persist
      },
    }),
});

// Redux Persistor pour synchronisation
export const persistor = persistStore(store);

// Typage du store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
