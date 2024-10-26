"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface productDetails {
    name: string;
    description: string;
    category: string;
    price: string;
}

export const Tables = () => {

    const [products, setProducts] = useState<productDetails[]>([]);

    const router = useRouter();

    async function getProducts(){

        const email = localStorage.getItem("client") || "";

        if(email == ""){
            router.push("/client/login");
            return;
        }

        const res = await fetch(`https://spacifyapi.pythonanywhere.com/api/v1/get_product_by_client_id?client_id=${email}`);
        const data = await res.json();

        //    data will be like this
        // [
        //     [
        //         1,
        //         "test1",
        //         "test prod",
        //         20.0,
        //         "brush",
        //         "test000@gmail.com"
        //     ],
        //     [
        //         2,
        //         "test2",
        //         "test prod2",
        //         20.0,
        //         "brush2",
        //         "test000@gmail.com"
        //     ]
        // ]

        const products = data.map((product: any) => ({
            name: product[1],
            description: product[2],
            price: product[3],
            category: product[4]
        }));

        setProducts(products);
        
    }


    useEffect(() => {
        getProducts();
        
    }, []);
  return <>
    

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                description
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            {products && products.map((product, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                </th>
                <td className="px-6 py-4">
                    {product.description}
                </td>
                <td className="px-6 py-4">
                    {product.category}
                </td>
                <td className="px-6 py-4">
                    {product.price}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

  </>;
};

