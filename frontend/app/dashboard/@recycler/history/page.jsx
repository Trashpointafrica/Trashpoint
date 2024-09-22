"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const History = () => {
  // Example data
  const [recycleData] = useState([
    {
      date: "1 - 09 - 2024",
      time: "9:00am",
      category: "Plastic",
      weight: "0.5kg",
      points: 50,
      location: "Uselu shell, Edaiken road.",
      status: "Pending",
    },
    {
      date: "1 - 08 - 2024",
      time: "9:00am",
      category: "Glass",
      weight: "0.9kg",
      points: 100,
      location: "Uwasota, off Lagos express",
      status: "Completed",
    },
    {
      date: "5 - 07 - 2024",
      time: "9:00am",
      category: "Paper",
      weight: "0.25kg",
      points: 35,
      location: "Textile mill road, off Ringroad",
      status: "Completed",
    },
    {
      date: "14 - 06 - 2024",
      time: "9:00am",
      category: "Rubber",
      weight: "50kg",
      points: 46,
      location: "Airport road by ADP junction",
      status: "Completed",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filtered data based on search
  const filteredData = recycleData.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-5 flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold">Recycle History</h1>
        <p className="px-5 py-3 text-gray-500 bg-gray-300 rounded-md">
          6th Sept 2024
        </p>
      </div>

      {/* Table information withe a border */}
      <div className="rounder py-2 border ">
        <div className="w-full grid grid-cols-2 gap-4">
          {/* Summary Cards */}
          <div className="flex font-bold justify-between items-center gap-4 mb-4">
            <div className="flex gap-3 p-4 shadow-sm">
              <p>Total Recycle</p>
              <p className="rounded-md p-2 bg-red-100">150</p>
            </div>
            <div className="flex gap-3 p-4 shadow-sm ">
              <p>Completed Recycles</p>
              <p className="p-2 bg-green-100 rounded-md">149</p>
            </div>
            <div className="flex gap-3 p-4 shadow-sm">
              <p>Pending Recycles</p>
              <p className="p-2 bg-purple-200 rounded-md">1</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center mb-4 p-4 border-gray-300">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-3 border border-gray-300 border-r-0 rounded-l-xl"
            />
            <button className="p-3 bg-green-500 border border-gray-300 border-l-0 rounded-r-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-300">
            <tr>
              <th className="p-4 border-b text-left">Date</th>
              <th className="p-4 border-b text-left">Time</th>
              <th className="p-4 border-b text-left">Waste category</th>
              <th className="p-4 border-b text-left">Weight</th>
              <th className="p-4 border-b text-left">Points gained</th>
              <th className="p-4 border-b text-left">Aggregator Location</th>
              <th className="p-4 border-b text-left">Status</th>
              <th className="p-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="p-4 border-b">{item.date}</td>
                <td className="p-4 border-b">{item.time}</td>
                <td className="p-4 border-b">{item.category}</td>
                <td className="p-4 border-b">{item.weight}</td>
                <td className="p-4 border-b">{item.points}</td>
                <td className="p-4 border-b">{item.location}</td>
                <td
                  className={`p-4 border-b font-semibold ${
                    item.status === "Pending"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.status}
                </td>
                <td className="p-4 border-b">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="m-4 flex justify-end space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded-md">&lt;</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-md">2</button>
          <button className="px-3 py-1 bg-gray-200 rounded-md">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default History;
