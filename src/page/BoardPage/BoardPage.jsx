import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../redux/search/selectorSearch';
import { addSortFilter } from '../../redux/search/searchSlice';
import { getBoardsThunk } from '../../redux/board/operationsBoard';
import EventsList from 'components/EventsList/EventsList';
import SelectSort from 'components/SelectSort/SelectSort';
import styles from './boardPage.module.css';

const BoardPage = () => {
  const dispatch = useDispatch();
  const { page } = useSelector(selectSearch);

  const [sort, setSort] = useState('');
  console.log(sort);
  const handleChange = event => {
    setSort(event.target.value);
  };

  useEffect(() => {
    dispatch(getBoardsThunk({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(addSortFilter(sort));
  }, [dispatch, sort]);

  return (
    <section className={styles.container}>
      <h1>Events</h1>
      <SelectSort handleChange={handleChange} sort={sort} />
      <EventsList />
    </section>
  );
};

export default BoardPage;
