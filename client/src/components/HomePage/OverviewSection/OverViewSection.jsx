import React from 'react';
import StockCard from './StockCard';

const OverViewSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Market Overview</h2>

      {/* Stock Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <StockCard name="AAPL" price={174.56} change={1.23} volume={5234000} isUp={true} />
        <StockCard name="TSLA" price={702.34} change={-2.45} volume={3125000} isUp={false} />
        <StockCard name="GOOGL" price={2850.12} change={0.87} volume={720000} isUp={true} />
        <StockCard name="Wipro" price={2850.12} change={0.87} volume={720000} isUp={true} />
      </div>
    </div>
  );
};

export default OverViewSection;
