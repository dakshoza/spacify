import { SideBar } from '@/components/client/SideBar'
import React from 'react'

export default function page() {
  return (
    <>
    <SideBar></SideBar>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 items-center sm:flex mt-80 mx-auto">
          Generate Report
        </button>
    </>
  )
}
