"use client";
import { useState, useEffect } from "react";

export default function LocationPage() {
  const [location, setLocation] = useState("");
  const [amTime, setAmTime] = useState("");
  const [pmTime, setPmTime] = useState("");
  const [locations, setLocations] = useState([]);

  // Fetch all saved locations
  const fetchLocations = async () => {
    try {
      const res = await fetch("/api/location");
      const text = await res.text();
      const data = text ? JSON.parse(text) : [];
      setLocations(data);
    } catch (err) {
      console.error("Failed to fetch locations:", err);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location && !amTime && !pmTime) return;

    try {
      const res = await fetch("/api/location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location, amTime, pmTime }),
      });

      const text = await res.text();
      const newLoc = text ? JSON.parse(text) : null;

      if (newLoc) setLocations([...locations, newLoc]);

      // clear inputs
      setLocation("");
      setAmTime("");
      setPmTime("");
    } catch (err) {
      console.error("Failed to add location:", err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/location?id=${id}`, { method: "DELETE" });
      setLocations(locations.filter((loc) => loc._id !== id));
    } catch (err) {
      console.error("Failed to delete location:", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Location / Timing</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Enter AM timing"
          value={amTime}
          onChange={(e) => setAmTime(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Enter PM timing"
          value={pmTime}
          onChange={(e) => setPmTime(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>

      {/* Show all entries */}
      <h2 className="text-lg font-semibold mb-2">All Entries</h2>
      {locations.length > 0 ? (
        <ul className="space-y-3">
          {locations.map((loc) => (
            <li
              key={loc._id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div className="space-y-1">
                {loc.location && <p>📍 Location: {loc.location}</p>}
                {loc.amTime && <p>☀️ AM Time: {loc.amTime}</p>}
                {loc.pmTime && <p>🌙 PM Time: {loc.pmTime}</p>}
              </div>
              <button
                onClick={() => handleDelete(loc._id)}
                className="text-red-500 font-bold text-lg"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No entries yet.</p>
      )}
    </div>
  );
}
