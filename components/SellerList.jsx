'use-client';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import $axios from '@/lib/axios.instance';
import { CircularProgress, Pagination } from '@mui/material';
import Loader from './Loader';

const SellerList = () => {
  const [page, setPage] = useState(1);
  const { isPending, data, error } = useQuery({
    queryKey: ['seller-product-list', page],
    queryFn: async () => {
      return await $axios.post('/product/seller/list', {
        page,
        limit: 2,
        searchText: '',
      });
    },
  });

  const productList = data?.data?.productList || [];

  if (isPending) {
    return <Loader />;
  }
  return (
    <div className="h-full ">
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

export default SellerList;
