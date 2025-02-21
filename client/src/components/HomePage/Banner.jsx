import React, { useEffect, useRef } from "react";

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight * 0.75);
    const columns = Math.floor(w / 20);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#00F";
      ctx.font = "16px monospace";
      
      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[75vh] overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-screen h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-5">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          AI-Powered Trading Analytics
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-3 max-w-2xl">
          Enhance your trading with cutting-edge AI insights and real-time analytics.
        </p>
        <div className="mt-6 flex gap-5">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all">
            Start Free Trial
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-500 transition-all">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
