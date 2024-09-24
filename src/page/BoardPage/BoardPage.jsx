import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../redux/search/selectorSearch';
import { getBoardsThunk } from '../../redux/board/operationsBoard';
import EventsList from 'components/EventsList/EventsList';
import styles from './boardPage.module.css';

const BoardPage = () => {
  const dispatch = useDispatch();
  const { page } = useSelector(selectSearch);

  useEffect(() => {
    dispatch(getBoardsThunk({ page }));
  }, [dispatch, page]);

  return (
    <section className={styles.container}>
      <h1>Events</h1>
      <EventsList />
    </section>
  );
};

export default BoardPage;
