import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from './auth/slice';
import ContactsReducer from './contacts/slice';

import { IAuthSlice } from './auth/types';
import { IContactsSlice } from './contacts/types';

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    contacts: ContactsReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
  contacts: IContactsSlice;
};

export type AppDispatch = typeof store.dispatch;
