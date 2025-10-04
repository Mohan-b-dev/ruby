"use client";
import { useState } from "react";

export default function PasswordCheck({ formData, onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/footer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, password: password.trim() }), // send entered password
      });

      const data = await res.json();

      if (res.ok && data.success) {
        onSuccess(); // save succeeded
      } else {
        setError("❌ Wrong password");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
        Confirm
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
