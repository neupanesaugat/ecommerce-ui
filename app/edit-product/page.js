import { Formik } from 'formik';
import React from 'react';

const EditProduct = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          brand: '',
          price: '',
          quantity: 1,
          category: '',
        }}
      ></Formik>
    </Box>
  );
};

export default EditProduct;
