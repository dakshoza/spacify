"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Landingpage() {

  const router = useRouter();

  const handlegetstarted = () => {
    router.push("/client/login");
  };

  function getcurryear() {
    return new Date().getFullYear();
  }

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white md:mb-0">
            <span className="ml-3 text-xl">Spacify</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" href="/client/login">
              Client
            </Link>
            <Link className="mr-5 hover:text-white" href={"/warehouse/login"}>
              Warehouse Owners
            </Link>
          </nav>
        </div>
      </header>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center">
            <Image
              width={500}
              height={500}
              className="object-cover object-center rounded w-2/3"
              alt="hero"
              src="https://images.unsplash.com/photo-1601598704991-eef6114775e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fHwy"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Streamlined Inventory Solutions
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Our Warehouse Inventory Management System simplifies storage for
              startups, allowing flexible space utilization without long-term
              commitments, enabling businesses to focus on growth while
              minimizing overhead costs.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={handlegetstarted}
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              Data-Driven Demand Forecasting
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Leverage advanced analytics with our demand prediction feature,
              ensuring optimized inventory levels and reducing waste. Startups
              can make informed decisions, enhancing customer satisfaction and
              driving business success.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Real-time inventory tracking and space allocation
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  AI-driven demand forecasting
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Hyperlocal delivery support
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Client-warehouse matching system
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Analytics dashboard insights
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Secure multi-user access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
     
    </div>
    <div className="flex justify-center -m-4">
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">START</h2>
          <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">Free</h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Basic Inventory Tracking
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Limited Warehouse Access
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Single Warehouse Location
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Buy
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-yellow-500 flex flex-col relative overflow-hidden">
          <span className="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">PRO</h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>$38</span>
            <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Real-time Inventory Tracking
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Multiple Warehouse Locations
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>AI-Driven Demand Forecasting
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Priority Customer Support
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Detailed Analytics with Trend Insights
          </p>
          <button className="flex items-center mt-auto text-white bg-yellow-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-600 rounded">Buy
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">BUSINESS</h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>$56</span>
            <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Unlimited Warehouse Locations and Sizes
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Advanced AI Demand & Supply Optimization
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Customized Analytics & Reporting
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Dedicated Account Manager
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>24/7 Premium Support & SLA
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fully Customizable Integrations
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Buy
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</section>


<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      
      <span className="ml-3 text-xl">Spacify</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© {getcurryear()} Spacify
      {/* <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer"></a> */}
    </p>
    
  </div>
</footer>
    </>
  );
}
