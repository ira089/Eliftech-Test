import React from 'react';
import styles from './userItem.module.css';

const UserItem = ({ item }) => {
  const { name, email } = item;
  return (
    <div className={styles.wrapItem}>
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

export default UserItem;
