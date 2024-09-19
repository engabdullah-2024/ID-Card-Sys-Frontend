import React from "react";
import Header from "./Header";

const IDCard = () => {
  return (
    <div>
<Header/>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-5">
      <div className="bg-white shadow-xl rounded-2xl w-80 sm:w-96 overflow-hidden">
        {/* Header with School Name */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-5 text-center">
          <h1 className="text-xl font-bold">Alfurqan High School</h1>
        </div>
        
        {/* Student Photo */}
        <div className="flex justify-center mt-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Student"
            className="w-24 h-24 rounded-full border-4 border-indigo-500"
            />
        </div>
        
        {/* Student Info */}
        <div className="text-center mt-5 px-4">
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-600 font-medium mt-2">ID: 12345678</p>
          <p className="text-sm text-gray-600 font-medium mt-1">Grade: 10</p>
        </div>

        {/* Divider */}
        <hr className="mt-5 border-t-2 border-indigo-500 mx-4" />

        {/* School Info */}
        <div className="mt-4 text-center pb-5 px-4">
          <p className="text-sm text-gray-600 font-medium">Alfurqan High School</p>
          <p className="text-sm text-gray-600">Valid for 2024 School Year</p>
        </div>
      </div>
    </div>
            </div>
  );
};

export default IDCard;
