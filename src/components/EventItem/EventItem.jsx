import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './eventItem.module.css';

const EventItem = ({ item }) => {
  const { title, description } = item;
  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapTitle}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.wrapLink}>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/view">View</NavLink>
      </div>
    </div>
  );
};

export default EventItem;
