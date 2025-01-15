'use client';

import { loginUserValidationSchema } from '@/validation-schema/login.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
  const router = useRouter();
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              'http://localhost:8080/user/login',
              values
            );

            localStorage.setItem('token', response?.data?.accessToken);
            localStorage.setItem(
              'firstName',
              response?.data?.userDetail?.firstName
            );
            localStorage.setItem('role', response?.data?.userDetail?.role);
            router.push('/');
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit} className="auth-form">
              <p className="text-3xl">Sign in</p>
              {/* Email */}
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  {...formik.getFieldProps('email')}
                ></TextField>
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              {/* Password */}

              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                ></TextField>
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
              >
                Login
              </Button>
              <div className="text-md underline text-blue-600">
                <Link href={'/register'}>New Here? Register</Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
