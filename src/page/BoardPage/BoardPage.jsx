import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBoardsThunk } from '../../redux/board/operationsBoard';
import EventsList from 'components/EventsList/EventsList';
import styles from './boardPage.module.css';

const BoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardsThunk({ page: 1 }));
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <h1>Events</h1>
      <EventsList />
    </section>
  );
};

export default BoardPage;
