import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../../redux/user/operationUser';
import UserList from 'components/UserList/UserList';
import styles from '../BoardPage/boardPage.module.css';

const ParticipantsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <h1>"Awesome event" participants</h1>
      <UserList />
    </section>
  );
};

export default ParticipantsPage;
