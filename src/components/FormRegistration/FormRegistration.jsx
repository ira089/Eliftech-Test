import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserThunk } from '../../redux/user/operationUser';
import { Formik, Form, Field } from 'formik';
import { allFieldsFilled } from '../../functions/functions';
import Input from '../Input/Input';
import styles from './formRegistration.module.css';

const FormRegistration = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    hearEvent: '',
  });
  console.log(formData);

  useEffect(() => {
    const addUserData = () => {
      if (!allFieldsFilled(formData)) {
        return;
      }
      console.log('чао какао');
      dispatch(addUserThunk(formData));
      // setFormData({ name: '', email: '', dateOfBirth: '', hearEvent: '' });
    };
    addUserData();
  }, [dispatch, formData]);

  const handleChangeData = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;

    console.log(name);
    console.log(value);

    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      return updatedData;
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        dateOfBirth: '',
        hearEvent: '',
      }}
    >
      <Form className={styles.form}>
        <Input
          handleChange={handleChangeData}
          valueInput={formData.name}
          name="name"
          type="text"
          textLabel="Full name"
        />
        <Input
          handleChange={handleChangeData}
          valueInput={formData.email}
          name="email"
          type="email"
          textLabel="Email"
        />
        <Input
          handleChange={handleChangeData}
          valueInput={formData.dateOfBirth}
          name="dateOfBirth"
          type="date"
          textLabel="Date of birth"
        />
        <div
          role="group"
          aria-labelledby="my-radio-group"
          className={styles.wrapRadio}
        >
          <Field
            id="hearEvent"
            className={styles.radio}
            type="radio"
            name="hearEvent"
            value="social_media"
            handleChange={handleChangeData}
            onChange={handleChangeData}
          />
          <label htmlFor="hearEvent">Social media</label>
          <label>
            <Field
              className={styles.radio}
              type="radio"
              name="hearEvent"
              value="friends"
              handleChange={handleChangeData}
              onChange={handleChangeData}
            />
            Friends
          </label>
          <label>
            <Field
              className={styles.radio}
              type="radio"
              name="hearEvent"
              value="found_myself"
              handleChange={handleChangeData}
              onChange={handleChangeData}
            />
            Found myself
          </label>
        </div>
      </Form>
    </Formik>
  );
};

export default FormRegistration;
