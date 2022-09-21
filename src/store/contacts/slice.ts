import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CONTACTS_SLICE_ALIAS, IContactItem, IContactsSlice } from './types';
import { fechUserAction } from './thunk';

const initialState: IContactsSlice = {
  contacts: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: CONTACTS_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fechUserAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [fechUserAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<IContactItem>>,
    ) => {
      state.contacts = payload;
    },

    [fechUserAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.contacts = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

// export const {
//   authorization,
//   resetAuthorization,
//   changeInputLogin,
//   changeInputPassword,
// } = authorizationSlice.actions;
export default contactsSlice.reducer;
