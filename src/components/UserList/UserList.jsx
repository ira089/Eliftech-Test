import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectFilteredUsers,
} from '../../redux/user/selectorUser';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import UserItem from 'components/UserItem/UserItem';

const UserList = () => {
  const { isLoading, error } = useSelector(selectUsers);

  const itemsVisible = useSelector(selectFilteredUsers);
  const isItemsVisible = Boolean(itemsVisible.length);

  const elements = itemsVisible.map(item => (
    <Grid size={3}>
      <UserItem key={item._id} item={item} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isItemsVisible ? (
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={3} columnSpacing={3}>
            {elements}
          </Grid>
        </Box>
      ) : (
        !isLoading && <p>sorry participants not found</p>
      )}
    </>
  );
};

export default UserList;
