'use-client';
import React from 'react';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import $axios from '@/lib/axios.instance';
import { CircularProgress } from '@mui/material';

const SellerList = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['seller-product-list'],
    queryFn: async () => {
      return await $axios.post('/product/seller/list', {
        page: 1,
        limit: 10,
        searchText: '',
      });
    },
  });
  console.log(data);
  const productList = data?.data?.productList || [];

  if (isPending) {
    return <CircularProgress />;
  }
  return (
    <div className="card-center">
      {productList.length ? (
        productList?.map((item) => {
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
        })
      ) : (
        <p>No product</p>
      )}
    </div>
  );
};

export default SellerList;
