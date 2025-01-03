'use client';
import BuyerList from '@/components/BuyerList';
import ProductCard from '@/components/ProductCard';
import SellerList from '@/components/SellerList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [role, setRole] = useState(null);

  console.log(role);
  useEffect(() => {
    const userRole = window.localStorage.getItem('role');
    setRole(userRole);
  }, []);

  return (
    <div>
      <p className="text-5xl bold underline"></p>
      {role === 'buyer' ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
