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

export const changeUserName = createAsyncThunk(
  `${CONTACTS_SLICE_ALIAS}/name`,
  async ({ id, name }: { id: number | string; name: string }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().patch(`/contacts/${id}`, {
        user: name,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const changeEmailName = createAsyncThunk(
  `${CONTACTS_SLICE_ALIAS}/email`,
  async ({ id, email }: { id: number | string; email: string }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().patch(`/contacts/${id}`, {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const changePhoneName = createAsyncThunk(
  `${CONTACTS_SLICE_ALIAS}/phone`,
  async ({ id, phone }: { id: number | string; phone: string }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().patch(`/contacts/${id}`, {
        phone,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addUser = createAsyncThunk(
  `${CONTACTS_SLICE_ALIAS}/addUser`,
  async (
    { name, phone, email }: { name: string; email: string; phone: string },
    { rejectWithValue },
  ) => {
    try {
      const obj = {
        user: name,
        phone,
        email,
        id: `${name}${phone}`,
      };

      await api().post('/contacts', obj);

      return obj;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
