import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/user/selectorUser';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import UserItem from 'components/UserItem/UserItem';

const UserList = () => {
  const { isLoading, error, users } = useSelector(selectUsers);

  const isUsers = Boolean(users.length);

  const elements = users.map(item => (
    <Grid size={3}>
      <UserItem key={item._id} item={item} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isUsers ? (
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
