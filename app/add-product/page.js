'use client';
import { productCategories } from '@/constants/general.constants';
import $axios from '@/lib/axios.instance';
import { addProductValidationSchema } from '@/validation-schema/product.validation.schema';
import { registerUserValidationSchema } from '@/validation-schema/register.user.validation.schema';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { Formik } from 'formik';
import React from 'react';

const AddProduct = () => {
  const { isPending, error, mutate } = useMutation({
    mutationKey: ['add-product'],
    mutationFn: async (values) => {
      return await $axios.post('/product/add', values, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      });
    },
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          brand: '',
          price: '',
          quantity: 1,
          category: '',
          freeShipping: false,
          description: '',
        }}
        validationSchema={addProductValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          mutate(values);
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit} className="auth-form">
              <p className="flex text-3xl justify-center">Add Product</p>
              {/* Email */}
              <FormControl fullWidth>
                <TextField
                  label="Name"
                  {...formik.getFieldProps('name')}
                ></TextField>
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Brand"
                  {...formik.getFieldProps('brand')}
                ></TextField>
                {formik.touched.brand && formik.errors.brand ? (
                  <FormHelperText error>{formik.errors.brand}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  label="Price"
                  {...formik.getFieldProps('price')}
                  type="number"
                />
                {formik.touched.price && formik.errors.price ? (
                  <FormHelperText error>{formik.errors.price}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Quantity"
                  {...formik.getFieldProps('quantity')}
                  type="number"
                />

                {formik.touched.quantity && formik.errors.quantity ? (
                  <FormHelperText error>
                    {formik.errors.quantity}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select {...formik.getFieldProps('category')} label="Category">
                  {productCategories.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
                {formik.touched.category && formik.errors.category ? (
                  <FormHelperText error>
                    {formik.errors.category}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  {...formik.getFieldProps('description')}
                  multiline
                  rows={6}
                  label="Description"
                />
                {formik.touched.description && formik.errors.description ? (
                  <FormHelperText error>
                    {formik.errors.description}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl
                fullWidth
                sx={{ display: 'flex', alignItems: 'self-start' }}
              >
                <FormControlLabel
                  control={
                    <Checkbox {...formik.getFieldProps('freeShipping')} />
                  }
                  label="Free Shipping"
                  labelPlacement="start"
                />
              </FormControl>

              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default AddProduct;
