import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="card-center">
      <Image src="/loader.gif" alt="loader" width={200} height={200}></Image>
    </div>
  );
};

export default Loader;
