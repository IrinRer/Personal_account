import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {};

export type AppDispatch = typeof store.dispatch;
