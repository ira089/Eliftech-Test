export const selectBoards = state => state.boards;
export const selectSearch = state => state.search;

export const selectSortedBoards = state => {
  const { filter } = selectSearch(state);

  const { boards } = selectBoards(state);

  if (!filter) {
    return boards;
  }
  if (filter === 'title') {
    const sortedTitle = boards.toSorted((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return sortedTitle;
  }
  if (filter === 'organizer') {
    const sortedOrganizer = boards.toSorted((a, b) => {
      return a.organizer.localeCompare(b.organizer);
    });
    return sortedOrganizer;
  }
  if (filter === 'eventDate') {
    const sortedEventDate = boards.toSorted((a, b) => {
      return Date.parse(a.event_date) - Date.parse(b.event_date);
    });
    return sortedEventDate;
  }
};
