'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ProductDetails = (props) => {
  return (
    <Box
      sx={{
        width: '1000px',
        height: '333px',
        boxShadow:
          ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
      }}
    >
      <Box>
        <Image
          src={
            props.image || '/book-composition-with-open-book_23-2147690555.jpg'
          }
          height={700}
          width={500}
          alt="Book image"
        />
      </Box>
      <Box
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography variant="h1" fontSize={30} fontFamily={'fantasy'}>
          {'Product Details :'}
        </Typography>
        <Typography>{'Name: S24'}</Typography>
        <Typography>{'Brand: Samsung'}</Typography>
        <Typography>{'Price: 2000'}</Typography>
        <Typography>{'Quantity: 4'}</Typography>
        <Typography>{'Description : This is my S24'}</Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
