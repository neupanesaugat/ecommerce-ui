'use client';
import Loader from '@/components/Loader';
import { productCategories } from '@/constants/general.constants';
import $axios from '@/lib/axios.instance';
import { addProductValidationSchema } from '@/validation-schema/product.validation.schema';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';

const AddProduct = () => {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id;
  const { data, isPending } = useQuery({
    queryKey: ['edit-product-list'],
    queryFn: async () => {
      return await $axios.get(`/product/detail/${productId}`);
    },
  });

  const { isPending: editPending, mutate } = useMutation({
    mutationKey: ['edit-product'],
    mutationFn: async (values) => {
      return await $axios.put(`/product/edit/${productId}`, values);
    },
    onSuccess: () => {
      router.push(`/product/details/${productId}`);
    },
  });
  const productDetail = data?.data?.productDetails;

  if (isPending || editPending) {
    return <Loader />;
  }

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={{
          name: productDetail.name || '',
          brand: productDetail.brand || '',
          price: productDetail.price || 0,
          quantity: productDetail.quantity || 1,
          category: productDetail.category || '',
          freeShipping: productDetail.freeShipping || false,
          description: productDetail.description || '',
        }}
        validationSchema={addProductValidationSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit} className="auth-form">
              <p className="flex text-3xl justify-center">Edit Product</p>
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
                    <Checkbox
                      checked={formik?.values?.freeShipping}
                      {...formik.getFieldProps('freeShipping')}
                    />
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
