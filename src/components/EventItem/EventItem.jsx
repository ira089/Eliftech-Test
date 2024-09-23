import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './eventItem.module.css';

const EventItem = () => {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapTitle}>
        <h4>Title</h4>
        <p>description</p>
      </div>
      <div className={styles.wrapLink}>
        <NavLink>Register</NavLink>
        <NavLink>View</NavLink>
      </div>
    </div>
  );
};

export default EventItem;
