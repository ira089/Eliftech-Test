import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PaginationMy = ({ totalPages, selectPage }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: 4,
        marginX: 'auto',
      }}
    >
      <Pagination
        count={totalPages}
        onChange={(_, num) => selectPage(num)}
        renderItem={item => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default PaginationMy;
