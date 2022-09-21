import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CONTACTS_SLICE_ALIAS, IContactItem, IContactsSlice } from './types';
import { fechUserAction } from './thunk';

const initialState: IContactsSlice = {
  contacts: [],
  inputName: '',
  inputEmail: '',
  inputPhone: '',
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

export const { setInputName, setInputEmail, setInputPhone } =
  contactsSlice.actions;
export default contactsSlice.reducer;
