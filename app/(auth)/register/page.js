'use client';
import { registerUserValidationSchema } from '@/validation-schema/register.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import React from 'react';

const Register = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          gender: '',
          role: '',
          age: '',
        }}
        validationSchema={registerUserValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-[20px] justify-between w-[400px] shadow-2xl shadow-slate-700 p-8 min-h-[400px]"
            >
              <p className="flex text-3xl justify-center">Register</p>
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
              <FormControl fullWidth>
                <TextField
                  label="First Name"
                  {...formik.getFieldProps('firstName')}
                ></TextField>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Last Name"
                  {...formik.getFieldProps('lastName')}
                ></TextField>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  {...formik.getFieldProps('gender')}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'others'}>Others</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  {...formik.getFieldProps('role')}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'buyer'}>Buyer</MenuItem>
                  <MenuItem value={'seller'}>Seller</MenuItem>
                </Select>
              </FormControl>

              <Button type="submit" variant="contained" color="success">
                Register
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Register;
