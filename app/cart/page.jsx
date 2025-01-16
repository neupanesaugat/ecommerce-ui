'use client';
import CartItemCard from '@/components/CartItemCard';
import { getCartList } from '@/lib/routes/cart.routes';
import { isBuyer } from '@/utils/check.role';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CartPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['cart-list'],
    queryFn: () => getCartList(),
    enabled: isBuyer(),
  });

  const cartData = data?.data?.cartData;

  return (
    <>
      <div className=" flex  justify-center items-center flex-wrap gap-4 m-8">
        {cartData.map((item) => {
          return <CartItemCard key={item._id} {...item} />;
        })}
      </div>
    </>
  );
};

export default CartPage;
