import React from 'react';
import Navbar from './Navbar';
import Product from './Product';
import ResultFound from './ResultFound';

function CartView() {
  return (
    <>
      <Navbar />
      <ResultFound />
      <Product />
    </>
  );
}

export default CartView;
