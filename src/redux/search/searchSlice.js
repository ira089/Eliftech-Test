import { createSlice } from '@reduxjs/toolkit';

const searchClice = createSlice({
  name: 'search',
  initialState: {
    page: 1,
    title: '',
    eventDate: '',
    organizer: '',
    fullName: '',
    email: '',
    filter: '',
  },
  reducers: {
    addPage: (state, { payload }) => {
      state.page = payload;
    },
    addTitle: (state, { payload }) => {
      state.title = payload;
      state.page = 1;
    },
    addEventDate: (state, { payload }) => {
      state.eventDate = payload;
    },
    addOrganizer: (state, { payload }) => {
      state.organizer = payload;
    },
    addFullName: (state, { payload }) => {
      state.fullName = payload;
    },
    addEmail: (state, { payload }) => {
      state.email = payload;
    },
    addSortFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const {
  addPage,
  addTitle,
  addEventDate,
  addOrganizer,
  addFullName,
  addEmail,
  addSortFilter,
} = searchClice.actions;
export default searchClice.reducer;
