"use client";
import { useState, useEffect } from "react";
import PasswordCheck from "@/components/PasswordCheck";

export default function FooterPage() {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
    timing: "",
    promises: [],
  });

  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  useEffect(() => {
    fetch("/api/footer")
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePromiseChange = (index, value) => {
    const updated = [...formData.promises];
    updated[index] = value;
    setFormData({ ...formData, promises: updated });
  };

  const addPromise = () => {
    setFormData({ ...formData, promises: [...formData.promises, ""] });
  };

  // Save called by PasswordCheck after successful password
  const saveData = async () => {
    const res = await fetch("/api/footer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        password: process.env.ADMIN_PASSWORD,
      }), // pass env password here
    });
    const data = await res.json();
    if (data.success) alert("✅ Footer data updated!");
    else alert("❌ Failed to update");
    setShowPasswordCheck(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-4">
      <h2 className="text-xl font-bold">Update Footer Info</h2>

      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="timing"
        placeholder="Opening Timing"
        value={formData.timing}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <h3 className="font-semibold">Our Promise</h3>
      {formData.promises.map((p, i) => (
        <input
          key={i}
          value={p}
          onChange={(e) => handlePromiseChange(i, e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
      ))}
      <button
        onClick={addPromise}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        + Add Promise
      </button>

      {showPasswordCheck ? (
        <PasswordCheck
          formData={formData}
          onSuccess={() => {
            alert("✅ Footer data updated!");
            setShowPasswordCheck(false);
          }}
        />
      ) : (
        <button
          onClick={() => setShowPasswordCheck(true)}
          className="bg-green-600 text-white px-4 py-2 rounded block mt-4"
        >
          Save
        </button>
      )}
    </div>
  );
}
