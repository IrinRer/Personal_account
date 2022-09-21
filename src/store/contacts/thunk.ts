import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { CONTACTS_SLICE_ALIAS } from './types';


export const fechUserAction = createAsyncThunk(
  `${CONTACTS_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);