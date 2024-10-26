"use client"

import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';

const AddProduct: FC = () => {
  
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    router.push('/client/products');

  };

  return (
    <form onSubmit={handleSubmit} className='m-20'>

      <h1 className='text-4xl font-bold text-center'>Add Products</h1>      
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder='Product Price'
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Details</label>
        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your product details..."></textarea>
      </div>
      
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onSubmit={handleSubmit}
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
