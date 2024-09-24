import { createSlice } from '@reduxjs/toolkit';
import { getUsersThunk, addUserThunk } from './operationUser';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../functions/functions';

const handleFulfilledGet = (state, { payload }) => {
  handleFulfilled(state);
  state.users = payload.result;
};

const handleFulfilledAdd = (state, { payload }) => {
  handleFulfilled(state);
  state.users.push(payload);
};

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.fulfilled, handleFulfilledGet)
      .addCase(getUsersThunk.rejected, handleRejected)
      .addCase(addUserThunk.pending, handlePending)
      .addCase(addUserThunk.fulfilled, handleFulfilledAdd)
      .addCase(addUserThunk.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
