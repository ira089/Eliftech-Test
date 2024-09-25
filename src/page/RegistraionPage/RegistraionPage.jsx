import React from 'react';
import FormRegistration from 'components/FormRegistration/FormRegistration';
import styles from '../BoardPage/boardPage.module.css';

const RegistraionPage = () => {
  return (
    <section className={styles.container}>
      <h1>Event registration</h1>
      <FormRegistration />
    </section>
  );
};

export default RegistraionPage;
