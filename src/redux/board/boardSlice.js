import { createSlice } from '@reduxjs/toolkit';
import { getBoardsThunk } from './operationsBoard';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../functions/functions';

const handleFulfilledGet = (state, { payload }) => {
  handleFulfilled(state);
  state.boards = payload.result;
  state.total = payload.total;
};

export const boardSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: [],
    total: '',
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getBoardsThunk.pending, handlePending)
      .addCase(getBoardsThunk.fulfilled, handleFulfilledGet)
      .addCase(getBoardsThunk.rejected, handleRejected);
  },
});

export const boardReducer = boardSlice.reducer;
