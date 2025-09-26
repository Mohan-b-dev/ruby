import React from "react";
import { Train, Car, Bus } from "lucide-react";

export default function HowToReachUs() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How to Reach Us
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Train className="w-6 h-6 text-white" />,
              title: "By Train",
              desc: "Just 2 minutes walk from Avadi Railway Station",
              gradient: "from-green-100 to-yellow-100",
              iconGradient: "linear-gradient(135deg, #84cc16 0%, #f59e0b 100%)",
            },
            {
              icon: <Car className="w-6 h-6 text-white" />,
              title: "By Car",
              desc: "Ample parking space available near the shop",
              gradient: "from-blue-100 to-indigo-100",
              iconGradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
            },
            {
              icon: <Bus className="w-6 h-6 text-white" />,
              title: "Public Transport",
              desc: "Well connected by buses and auto-rickshaws",
              gradient: "from-pink-100 to-purple-100",
              iconGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r ${item.gradient}`}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: item.iconGradient }}
              >
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {/* Description */}
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
