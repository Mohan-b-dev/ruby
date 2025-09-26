// components/DailyArrivals.tsx
import React from "react";

const DailyArrivals = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-100 to-amber-100 rounded-3xl p-8 mx-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Daily Fresh Arrivals
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6 flex items-center justify-center gap-2">
        <span className="text-yellow-500">⭐</span>
        Best prices guaranteed •<span className="text-blue-500">🏪</span>
        Visit our store •<span className="text-purple-500">💎</span>
        Premium quality assurance
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg w-[250px] h-32">
          <div className="text-4xl font-bold text-green-600">100+</div>
          <div className="text-base text-gray-600">Fruit Varieties</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg w-[250px] h-32">
          <div className="text-4xl font-bold text-orange-600">Daily</div>
          <div className="text-base text-gray-600">Fresh Stock</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg w-[250px] h-32">
          <div className="text-4xl font-bold text-red-600">6+</div>
          <div className="text-base text-gray-600">Years Experience</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg w-[250px] h-32">
          <div className="text-4xl font-bold text-purple-600">1000+</div>
          <div className="text-base text-gray-600">Happy Customers</div>
        </div>
      </div>
    </div>
  );
};

export default DailyArrivals;
