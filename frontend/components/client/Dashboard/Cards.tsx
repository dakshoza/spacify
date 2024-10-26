"use client";

const Cards: React.FC = () => {
  return (
    <div className="rounded-lg shadow bg-gray-800 border-gray-700 flex justify-around">

      <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        <dl className="gap-8 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">10</dt>
            <dd className="text-gray-500 dark:text-gray-400">Products</dd>
          </div>
        </dl>
      </div>
      <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        <dl className=" gap-8 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">₹10,000</dt>
            <dd className="text-gray-500 dark:text-gray-400">Profit</dd>
          </div>
        </dl>
      </div>
      <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        <dl className=" gap-8 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">20</dt>
            <dd className="text-gray-500 dark:text-gray-400">Warehouse distribution</dd>
          </div>
        </dl>
      </div>

    </div>

  );
};

export default Cards;
