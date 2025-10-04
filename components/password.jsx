"use client";

import { useState } from "react";

export default function Password({ onSuccess, onCancel }) {
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: inputPassword }),
      });
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        const text = await response.text();
        throw new Error(
          contentType.includes("html")
            ? `API route not found or server error (HTTP ${response.status})`
            : text || `HTTP error ${response.status}`
        );
      }
      const { isValid } = await response.json();
      if (isValid) {
        onSuccess(inputPassword);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      console.error("Password verification error:", err.message, err.stack);
      setError(
        err.message ||
          "An error occurred during password verification. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow-lg animate-fade-in"
    >
      <label htmlFor="password" className="text-lg font-semibold text-gray-800">
        Enter Password
      </label>
      <input
        id="password"
        type="password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full border border-gray-300 bg-gray-50 rounded-xl p-3 text-gray-900 text-base focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm transition-all duration-200 placeholder-gray-400"
        aria-describedby={error ? "password-error" : undefined}
      />
      {error && (
        <p id="password-error" className="text-red-500 text-sm font-medium">
          {error}
        </p>
      )}
      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-2 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-200"
        >
          Verify
        </button>
        <button
          type="button"
          onClick={() => {
            setInputPassword("");
            setError("");
            onCancel();
          }}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-2 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
