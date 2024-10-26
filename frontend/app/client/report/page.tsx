"use client";

import { SideBar } from "@/components/client/SideBar";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Page() {

  const [report, setReport] = useState<string>("");

  const handleGenrateReport = async () => {
    const email = localStorage.getItem("client") || "";

    if (email == "") {
      alert("Please login to generate report");
      return;
    }


    const res = await fetch(
      `https://spacifyapi.pythonanywhere.com/api/v1/reportgen?email=${email}`
    );

    if (res.status == 200) {
      toast.success("Report generated successfully");
      const data = await res.text();
      setReport(data);
    } else {
      toast.error("Report generation failed");
    }

  };

  return (
    <>
      <SideBar />

      {report == "" && 

      <div className="ml-72 flex justify-center items-center mt-80">
        <button
          className="bg-blue-500 text-white rounded hover:bg-blue-600 px-4 py-2"
          onClick={handleGenrateReport}
        >
          Generate Report
        </button>
      </div>

    }
      <div className="ml-72">
        {report != "" && (
          <div className="flex justify-center items-center mt-20">
            <div className="p-4 rounded-lg shadow-lg">
              <p>{report}</p>
            </div>
          </div>
        )}
      </div>

    </>
  );
}
