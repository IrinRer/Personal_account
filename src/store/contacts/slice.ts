import { addUser, deleteUser } from 'store/contacts/thunk';
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

  searchInput: '',
  filterContacts: [],

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
    resetAdd: (state) => {
      state.addPhone = '';
      state.addEmail = '';
      state.addName = '';
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
      state.filterContacts = state.contacts.filter((item) => {
        return (
          item.user.toLowerCase().indexOf(action.payload.toLowerCase()) > -1 ||
          item.phone.toLowerCase().indexOf(action.payload.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
        );
      });
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

    [addUser.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [addUser.fulfilled.type]: (
      state,
      { payload }: PayloadAction<IContactItem>,
    ) => {
      state.contacts.push(payload);
    },

    [addUser.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loading = false;
      state.error = payload;
    },

    [deleteUser.fulfilled.type]: (
      state,
      { payload }: PayloadAction<number | string>,
    ) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
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
  resetAdd,
  setSearch,
} = contactsSlice.actions;
export default contactsSlice.reducer;
