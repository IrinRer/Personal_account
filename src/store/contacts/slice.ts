import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CONTACTS_SLICE_ALIAS, IContactItem, IContactsSlice } from './types';
import { fechUserAction } from './thunk';

const initialState: IContactsSlice = {
  contacts: [],
  inputName: '',
  inputEmail: '',
  inputPhone: '',

  addName: '',
  addEmail: '',
  addPhone: '',

  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: CONTACTS_SLICE_ALIAS,
  initialState,
  reducers: {
    setInputName: (state, action: PayloadAction<string>) => {
      state.inputName = action.payload;
    },
    setInputEmail: (state, action: PayloadAction<string>) => {
      state.inputEmail = action.payload;
    },
    setInputPhone: (state, action: PayloadAction<string>) => {
      state.inputPhone = action.payload;
    },

    setAddName: (state, action: PayloadAction<string>) => {
      state.addName = action.payload;
    },
    setAddEmail: (state, action: PayloadAction<string>) => {
      state.addEmail = action.payload;
    },
    setAddPhone: (state, action: PayloadAction<string>) => {
      state.addPhone = action.payload;
    },
  },
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

export const {
  setInputName,
  setInputEmail,
  setInputPhone,
  setAddName,
  setAddEmail,
  setAddPhone,
} = contactsSlice.actions;
export default contactsSlice.reducer;
