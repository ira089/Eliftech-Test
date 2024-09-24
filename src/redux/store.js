import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from './board/boardSlice';
import { userReducer } from './user/userSlice';
import searchReducer from './search/searchSlice';

export const store = configureStore({
  reducer: {
    boards: boardReducer,
    users: userReducer,
    search: searchReducer,
  },
});
