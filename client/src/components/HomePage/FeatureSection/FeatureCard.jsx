import React from "react";
import { FaChartLine } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 duration-200">
      {/* Icon */}
      <div className="text-blue-600 text-4xl mb-3">{icon}</div>

      {/* Title */}
      <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
