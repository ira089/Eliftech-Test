import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from './board/boardSlice';
import { userReducer } from './user/userSlice';

export const store = configureStore({
  reducer: {
    boards: boardReducer,
    users: userReducer,
  },
});
