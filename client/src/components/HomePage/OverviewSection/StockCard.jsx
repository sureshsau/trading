import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const StockCard = ({ name, price, change, volume, isUp }) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md w-full sm:w-64 h-44 flex flex-col justify-between transition-transform hover:scale-105 duration-200">
      {/* Stock Name & Last Updated */}
      <div className="flex justify-between items-center">
        <h2 className="text-gray-800 font-semibold text-lg">{name}</h2>
        <p className="text-gray-500 text-xs">Updated 5 min ago</p>
      </div>

      {/* Price and Percentage Change */}
      <div className="flex justify-between items-center">
        <p className="text-gray-700 text-lg font-medium">${price.toFixed(2)}</p>
        <div
          className={`flex items-center rounded-md px-3 py-1 font-semibold 
          ${isUp ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}
        >
          {isUp ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
          <span>{change.toFixed(2)}%</span>
        </div>
      </div>

      {/* Volume */}
      <div className="text-gray-600 text-sm">
        <p>Volume: <span className="text-gray-800 font-medium">{volume.toLocaleString()}</span></p>
      </div>
    </div>
  );
};

export default StockCard;
