import * as yup from 'yup';

export const FormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, 'Enter a valid Full name')
    .required('Full name is required'),

  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Enter a valid Email'
    )
    .required('Email is required'),

  dateOfBirth: yup.string().required('Date of birth is required'),
  hearEvent: yup.string(),
});
