'use client';
import Loader from '@/components/Loader';
import $axios from '@/lib/axios.instance';
import { isBuyer, isSeller } from '@/utils/check.role';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  IconButton,
  Stack,
  Button,
  Typography,
  Chip,
  Checkbox,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const ProductDetails = () => {
  const params = useParams();
  const [count, setCount] = React.useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const router = useRouter();

  const { data, isPending } = useQuery({
    queryKey: ['get-product-list'],
    queryFn: async () => {
      return await $axios.get(`/product/detail/${params.id}`);
    },
  });
  const productDetail = data?.data?.productDetails;

  if (isPending) {
    return <Loader />;
  }

  // hit get product detail api

  return (
    <div className="flex flex-col md:flex-row max-w-[90%] mx-auto shadow-2xl rounded-lg overflow-hidden bg-white">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <Image
          src="/book-composition-with-open-book_23-2147690555.jpg"
          height={600}
          width={600}
          alt="product name"
          className="object-contain"
        />
      </div>
      {/* Product Details */}
      <div className="w-full md:w-1/2 flex flex-col items-start p-6 gap-4">
        <Typography
          variant="h5"
          className="font-bold text-gray-800 text-lg md:text-2xl"
        >
          {productDetail?.name}
        </Typography>
        <Chip
          label={productDetail?.brand}
          color="secondary"
          className="text-sm md:text-base"
        />
        <Typography variant="h6" className="text-gray-600 text-base md:text-lg">
          {productDetail?.category}
        </Typography>
        <Typography
          variant="h6"
          className="font-bold text-green-500 text-lg md:text-xl"
        >
          ${productDetail?.price}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="h6"
            className="text-gray-500 text-sm md:text-base"
          >
            Free Shipping
          </Typography>
          <Checkbox color="success" checked={productDetail.freeShipping} />
        </Stack>

        <Typography variant="h6" className="text-gray-500 text-sm md:text-base">
          Quantity: {productDetail?.quantity}
        </Typography>
        <Typography
          className="text-justify text-gray-600 text-sm md:text-base leading-6"
          variant="h6"
        >
          {productDetail?.description}
        </Typography>
        {/* Quantity Selector */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          className="mt-6"
        >
          <IconButton color="success" size="large" onClick={increaseCount}>
            <AddIcon />
          </IconButton>
          <Typography
            variant="h5"
            className="text-lg font-semibold text-gray-800"
          >
            {count}
          </Typography>
          <IconButton
            color="error"
            size="large"
            onClick={decreaseCount}
            disabled={count === 1}
          >
            <RemoveIcon />
          </IconButton>
        </Stack>
        {/* Add to Cart Button */}
        {isBuyer() && (
          <Button
            variant="contained"
            color="success"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg mt-4"
          >
            Add to Cart
          </Button>
        )}
        {isSeller() && (
          <div className="flex flex-column gap-8 my-4">
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteOutlineOutlinedIcon />}
            >
              Delete
            </Button>
            <Button
              color="success"
              variant="contained"
              startIcon={<EditNoteOutlinedIcon />}
              onClick={() => {
                router.push(`/product/edit/${params.id}`);
              }}
            >
              Edit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
