import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBoards,
  selectSortedBoards,
} from '../../redux/board/selectorsBoard';
import { addPage } from '../../redux/search/searchSlice';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import EventItem from 'components/EventItem/EventItem';
import PaginationMy from 'components/PaginationMy/PaginationMy';

const EventsList = () => {
  const { isLoading, error, boards, total } = useSelector(selectBoards);

  const itemsSorted = useSelector(selectSortedBoards);

  const totalPages = Math.ceil(total / 12);

  const isItemsSorted = Boolean(itemsSorted.length);

  const dispatch = useDispatch();

  const elements = itemsSorted.map(item => (
    <Grid size={3}>
      <EventItem key={item._id} item={item} />
    </Grid>
  ));

  const selectPage = num => {
    dispatch(addPage(num));
  };

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isItemsSorted ? (
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={3} columnSpacing={3}>
            {elements}
          </Grid>
        </Box>
      ) : (
        !isLoading && <p>sorry boards not found</p>
      )}
      {!!totalPages && !boards.length < 12 && (
        <PaginationMy totalPages={totalPages} selectPage={selectPage} />
      )}
    </>
  );
};

export default EventsList;
