
import Cards from "@/components/client/Dashboard/Cards";
import Chart from "@/components/client/Dashboard/Chart";
import { Tables } from "@/components/client/Dashboard/Tables";
import { SideBar } from "@/components/client/SideBar";
import React from "react";

const Page = () => {
  return <>
    <SideBar />

    <div className="sm:ml-72 mx-16 my-12">
        <Cards />

        <div className="my-20 flex justify-between gap-5 mx-20">
              <Chart />
        </div>
    </div>
  </>;
};

export default Page;