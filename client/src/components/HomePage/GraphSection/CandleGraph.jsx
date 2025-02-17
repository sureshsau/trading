import React, { useEffect, useRef } from 'react';
import { CandlestickSeries, createChart } from 'lightweight-charts';

const CandleGraph = ({ data }) => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth || 600, // Dynamic width
            height: 400,
            layout: { textColor: 'black', background: { type: 'solid', color: 'white' } },
            grid: {
                vertLines: { color: '#e1e1e1' },
                horzLines: { color: '#e1e1e1' },
            },
            timeScale: {
                borderColor: '#ccc',
            },
        });
        chartRef.current = chart;

        const candlestickSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderVisible: false,
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350',
        });

        candlestickSeries.setData(data);
        chart.timeScale().fitContent();

        return () => chart.remove();
    }, [data]);

    return (
        <div
            ref={chartContainerRef}
            className="w-full h-[400px] bg-gray-100 rounded-lg  overflow-hidden mx-auto"
        />
    );
};

export default CandleGraph;
