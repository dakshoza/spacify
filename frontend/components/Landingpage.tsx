import Link from 'next/link'
import React from 'react'

export default function Landingpage() {
  return (
    <>
    <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl">Spacify</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-white" href="/client">Client</Link>
      <Link className="mr-5 hover:text-white" href={"/warehouse"}>Warehouse Owners</Link>
    </nav>
  </div>
</header>


    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Streamlined Inventory Solutions
      </h1>
      <p className="mb-8 leading-relaxed">Our Warehouse Inventory Management System simplifies storage for startups, allowing flexible space utilization without long-term commitments, enabling businesses to focus on growth while minimizing overhead costs.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1601598704991-eef6114775e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fHwy"/>
    </div>
  </div>
</section>

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1601598838108-5019bf3ea4a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlfGVufDB8fDB8fHwy"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Data-Driven Demand Forecasting</h1>
      <p className="leading-relaxed mb-8">Leverage advanced analytics with our demand prediction feature, ensuring optimized inventory levels and reducing waste. Startups can make informed decisions, enhancing customer satisfaction and driving business success.</p>
      <div className="flex justify-center">
    </div>
    </div>
  </div>
</section>

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Exceptional Client Support
      </h1>
      <p className="mb-8 leading-relaxed">
      We prioritize client success through a comprehensive onboarding process and dedicated support. Our commitment ensures startups navigate inventory challenges confidently, maximizing the benefits of our tailored warehouse solutions.</p>
      <div className="flex justify-center">
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}
