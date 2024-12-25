import * as Yup from 'yup';

export const registerUserValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Required')
    .max(55, 'Email must be at max 55 characters')
    .trim()
    .lowercase(),

  password: Yup.string()
    .required('Password is required')
    .max(20, 'Password must be at max 20 characters'),

  firstName: Yup.string('Name must be a string')
    .required()
    .max(20, 'Name must be at max 20 characters'),

  gender: Yup.string().required(),

  lastName: Yup.string('Name must be a string')
    .required()
    .max(20, 'Name must be at max 20 characters'),
});
