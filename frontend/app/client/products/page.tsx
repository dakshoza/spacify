"use client";

import { Tables } from "@/components/client/products/Tables";
import { SideBar } from "@/components/client/SideBar";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {

    const router = useRouter();

    const handleaddproductbtn = () => {
        router.push("/client/products/add");
    }

  return (
    <>
      <SideBar />

      <div className="sm:ml-72 mx-16 my-12">
        <div className="flex justify-between items-center my-5">
          <h2 className="text-3xl font-bold">All Products</h2>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleaddproductbtn}
          >
            Add Product
          </button>
        </div>

        <Tables />
      </div>
    </>
  );
}
