"use client";

import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddProduct: FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [productDetails, setProductDetails] = useState<string>("");
  
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (productName == "" || price <= -1 || productDetails == "") {
      toast.error("Please fill all fields");
      return;
    }

    const client = localStorage.getItem("client") || ""
    
    if(client == ""){
      router.push("/client/login");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", productName);
    formdata.append("price", price.toString());
    formdata.append("category", "any");
    formdata.append("description", productDetails);
    formdata.append("client", client);

    const res = await fetch(
      "https://spacifyapi.pythonanywhere.com/api/v1/addproduct",
      {
        method: "POST",
        body: formdata,
      }
    );

    if (res.status == 200) {
      toast.success("Account created successfully");

      router.push("/client/products");
    } else {
      toast.error("Error creating account");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("client") == null) {
      router.push("/client/login");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="m-20">
      <h1 className="text-4xl font-bold text-center">Add Products</h1>
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product Name
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          placeholder="Product Price"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product Details
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your product details..."
          value={productDetails}
          onChange={(e) => setProductDetails(e.target.value)}
        ></textarea>
      </div>

      <div className="w-full flex justify-center">

      <button
        type="submit"
        className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onSubmit={handleSubmit}
        >
        Add Product
      </button>
        </div>
    </form>
  );
};

export default AddProduct;
