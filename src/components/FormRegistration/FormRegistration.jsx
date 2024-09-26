import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserThunk } from '../../redux/user/operationUser';
import { Formik, Form } from 'formik';
import { allFieldsFilled } from '../../functions/functions';
import { FormSchema } from '../../schemas/schemas';
import Input from '../Input/Input';
import RadioButton from 'components/RadioButton/RadioButton';
import styles from './formRegistration.module.css';

const FormRegistration = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    hearEvent: '',
  });

  useEffect(() => {
    const addUserData = () => {
      if (!allFieldsFilled(formData)) {
        return;
      }
      dispatch(addUserThunk(formData));
      setFormData({ name: '', email: '', dateOfBirth: '', hearEvent: '' });
    };
    addUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChangeData = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
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
      validationSchema={FormSchema}
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
        <RadioButton
          value={formData.hearEvent}
          handleChange={handleChangeData}
        />
      </Form>
    </Formik>
  );
};

export default FormRegistration;
