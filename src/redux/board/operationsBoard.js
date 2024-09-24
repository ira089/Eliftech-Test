import { createAsyncThunk } from '@reduxjs/toolkit';
import * as boardApi from '../../api/boardApi';

export const getBoardsThunk = createAsyncThunk(
  'boards/get',
  async (body, thunkAPI) => {
    try {
      const boards = boardApi.fetchBoards(body);
      return boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
