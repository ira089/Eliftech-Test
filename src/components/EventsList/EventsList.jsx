import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from '../../redux/board/selectorsBoard';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import EventItem from 'components/EventItem/EventItem';
import PaginationMy from 'components/PaginationMy/PaginationMy';

const EventsList = () => {
  const { isLoading, error, boards, total, page } = useSelector(selectBoards);
  const totalPages = total / 12;
  const isBoards = Boolean(boards.length);
  console.log(boards);
  const dispatch = useDispatch();

  const elements = boards.map(item => (
    <Grid size={3}>
      <EventItem key={item._id} item={item} />
    </Grid>
  ));

  // const selectPage = num => {
  //   dispatch(addPage(num));
  // };

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isBoards ? (
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={3} columnSpacing={3}>
            {elements}
          </Grid>
        </Box>
      ) : (
        !isLoading && <p>sorry boards not found</p>
      )}
      {!!totalPages && !boards.length < 12 && (
        <PaginationMy
          page={page}
          totalPages={totalPages}
          // selectPage={selectPage}
        />
      )}
    </>
  );
};

export default EventsList;
