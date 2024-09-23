import React from 'react';
import EventsList from 'components/EventsList/EventsList';
import styles from './boardPage.module.css';

const BoardPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(boardThunk());
  // }, []);

  return (
    <section className={styles.container}>
      <h1>Events</h1>
      <EventsList />
    </section>
  );
};

export default BoardPage;
