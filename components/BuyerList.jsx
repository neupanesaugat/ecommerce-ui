'use client';
import $axios from '@/lib/axios.instance';
import { Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const BuyerList = () => {
  const { data, isPending } = useQuery({
    queryKey: ['buyer-product-list'],
    queryFn: async () => {
      return await $axios.post('/product/buyer/list', { page: 1, limit: 3 });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const productList = data?.data?.productList;
  console.log(productList);
  if (isPending) {
    <Loader />;
  }
  return (
    <div>
      <div></div>
    </div>
  );
};

export default BuyerList;
