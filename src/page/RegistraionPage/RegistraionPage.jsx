import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addUserThunk } from '../../redux/user/operationUser';
import FormRegistration from 'components/FormRegistration/FormRegistration';
import styles from '../BoardPage/boardPage.module.css';

const RegistraionPage = () => {
  // const dispatch = useDispatch();

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   dateOfBirth: '',
  //   hearEvent: '',
  // });
  // console.log(formData);

  // const handleChangeForm = values => {
  //   setFormData(values);
  // };

  // const submitData = () => {
  //   dispatch(addUserThunk(formData));
  // };

  return (
    <section className={styles.container}>
      <h1>Event registration</h1>
      <FormRegistration
      // handleChangeForm={handleChangeForm}
      // onSubmit={submitData}
      />
    </section>
  );
};

export default RegistraionPage;
