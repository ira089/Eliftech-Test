import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../../redux/user/operationUser';
import { addFullName, addEmail } from '../../redux/search/searchSlice';
import UserList from 'components/UserList/UserList';
import styles from './participantsPage.module.css';

const ParticipantsPage = () => {
  const dispatch = useDispatch();

  const changeFitlerName = ({ target }) => {
    dispatch(addFullName(target.value));
  };
  const changeFitlerEmail = ({ target }) => {
    dispatch(addEmail(target.value));
  };

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <h1>"Awesome event" participants</h1>
      <p>Find participants by Full name</p>
      <input name="filter" type="text" onChange={changeFitlerName} />
      <p>Find participants by Email</p>
      <input name="filter" type="text" onChange={changeFitlerEmail} />
      <UserList />
    </section>
  );
};

export default ParticipantsPage;
