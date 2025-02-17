import React from "react";
import FeatureCard from "./FeatureCard";
import { FaChartLine, FaShieldAlt, FaBolt, FaMobileAlt } from "react-icons/fa";

const Feature = () => {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Real-Time Analytics",
      description: "Stay ahead with live market insights and data-driven decisions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Trading",
      description: "Advanced encryption ensures your transactions are always safe.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Execution",
      description: "Experience seamless, lightning-fast trade executions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-Friendly",
      description: "Trade anytime, anywhere with our mobile-optimized platform.",
    },
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-800">Why Choose Us?</h2>
      <p className="text-center text-gray-500 text-md mt-2">Explore the key features that make our trading platform stand out.</p>

                    {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
