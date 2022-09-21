import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { random } from 'lodash';
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
  async ({ id, name }: { id: number; name: string }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().patch(`/contacts/${id}`, {
        name,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const changeEmailName = createAsyncThunk(
  `${CONTACTS_SLICE_ALIAS}/email`,
  async ({ id, email }: { id: number; email: string }, { rejectWithValue }) => {
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
  async ({ id, phone }: { id: number; phone: string }, { rejectWithValue }) => {
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
      const response: AxiosResponse = await api().post('/contacts', {
        name,
        phone,
        email,
        id: random(),
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
