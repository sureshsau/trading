import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="w-screen h-[85vh] flex flex-col items-center justify-center text-left px-5 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20220727/original/pngtree-stock-market-management-benefit-success-picture-image_1832062.jpg')",
      }}
    >
      {/* Light Overlay for Readability */}
      <div className="absolute inset-0  bg-opacity-40 backdrop-blur-sm"></div>

      {/* Content Box */}
      <div className="relative z-10 md:w-[50%] self-start md:ml-[10%]">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Transform Your Trading with AI-Powered Analytics
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mt-3 leading-relaxed">
          Experience the future of trading with real-time market analysis,
          predictive AI insights, and institutional-grade tools designed for modern traders.
        </p>
                            {/* Buttons Section */}
        <div className="flex flex-wrap gap-5 mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-all
            cursor-pointer hover:scale-110
          ">
            Start Free Trial
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-md shadow-lg hover:bg-white hover:text-blue-600 transition-all">
            Watch Demo
          </button>
        </div>

                         {/* Promises Section */}
        <div className="flex gap-8 mt-6">
          <div className="flex items-center gap-3">
            <FaCheckCircle size={18} className="text-blue-300" />
            <p className="text-white text-md">14-Day Free Trial</p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheckCircle size={18} className="text-blue-300" />
            <p className="text-white text-md">No Credit Card Required</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
