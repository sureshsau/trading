import React, { useEffect, useState } from "react";
import CandleGraph from "./CandleGraph";
const sampleData = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];






const GraphSection = () => {

    return (
        <div className="p-8 bg-gray-50">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
                Market Performance
            </h2>
            <p className="text-center text-gray-600 text-lg mb-10">
                Live candlestick chart for real-time trading insights. Analyze market trends to make informed decisions.
            </p>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
                <CandleGraph data={sampleData} />

            </div>
        </div>
    );
};

export default GraphSection;
