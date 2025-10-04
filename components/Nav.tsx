"use client";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Nav() {
  const [latestEntry, setLatestEntry] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("/api/location");
        if (!res.ok) throw new Error("Failed to fetch");
        const text = await res.text();
        const data = text ? JSON.parse(text) : [];

        if (data.length > 0) {
          setLatestEntry(data[data.length - 1]); // last entry
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchLatest();

    // Optional: live update every 10s
    const interval = setInterval(fetchLatest, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src="/icon.png" alt="R" className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-xl font-bold text-orange-500">
            RUBY FRUITS SHOP
          </h1>
          <p className="text-sm text-gray-600">Fresh • Natural • Premium</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm">
        {latestEntry?.location && (
          <div className="flex items-center text-green-600">
            <FaMapMarkerAlt className="mr-1" />
            {latestEntry.location}
          </div>
        )}
        {(latestEntry?.amTime || latestEntry?.pmTime) && (
          <div className="flex items-center text-orange-500">
            <FaClock className="mr-1" />
            {latestEntry?.amTime && (
              <span className="mr-2">Open Daily {latestEntry.amTime}AM -</span>
            )}
            {latestEntry?.pmTime && <span>{latestEntry.pmTime}PM </span>}
          </div>
        )}
      </div>
    </header>
  );
}
