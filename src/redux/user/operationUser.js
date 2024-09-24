import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from '../../api/userApi';

export const getUsersThunk = createAsyncThunk(
  'users/get',
  async (_, thunkAPI) => {
    try {
      const users = userApi.fetchUsers;
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserThunk = createAsyncThunk(
  'users/post',
  async (data, thunkAPI) => {
    try {
      const user = userApi.fetchUserAdd(data);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
