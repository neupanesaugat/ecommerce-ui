'use client';
import $axios from '@/lib/axios.instance';
import { Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from './Loader';
import ProductCard from './ProductCard';
import { isBuyer } from '@/utils/check.role';

const BuyerList = () => {
  const [page, setPage] = useState(1);
  const { data, isPending } = useQuery({
    queryKey: ['buyer-product-list', page],
    queryFn: async () => {
      return await $axios.post('/product/buyer/list', { page, limit: 8 });
    },
    onError: (error) => {
      console.log(error);
    },
    enabled: isBuyer(),
  });
  const productList = data?.data?.productList;
  console.log(productList);
  if (isPending) {
    <Loader />;
  }
  return (
    <div className="h-full ">
      <div className="card-center">
        {productList?.map((item) => {
          return (
            <ProductCard
              key={item._id}
              // _id={item._id}
              // brand={item.brand}
              // name={item.name}
              // price={item.image}
              // description={item.description}
              // image = {item.image}
              //? alternative code for above
              {...item}
            />
          );
        })}
      </div>
      <Pagination
        page={page}
        count={5}
        color="secondary"
        size="large"
        className="card-center"
        onChange={(_, value) => {
          setPage(value);
        }}
      ></Pagination>
    </div>
  );
};

export default BuyerList;
