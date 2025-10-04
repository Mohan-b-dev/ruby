"use client";

import { useEffect, useState } from "react";
import Password from "../../components/password";

export default function AboutPage() {
  const [dbParagraph1, setDbParagraph1] = useState("");
  const [dbParagraph2, setDbParagraph2] = useState("");
  const [draftParagraph1, setDraftParagraph1] = useState("");
  const [draftParagraph2, setDraftParagraph2] = useState("");
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [actionType, setActionType] = useState(null); // "save" or "delete"
  const [deleteParagraph, setDeleteParagraph] = useState(null); // paragraph key for delete
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch("/api/about");
        if (!response.ok) {
          const contentType = response.headers.get("content-type");
          const text = await response.text();
          throw new Error(
            contentType.includes("html")
              ? `API route not found or server error (HTTP ${response.status})`
              : text || `HTTP error ${response.status}`
          );
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debug log
        setDbParagraph1(data.paragraph1 || "");
        setDbParagraph2(data.paragraph2 || "");
        setDraftParagraph1(data.paragraph1 || "");
        setDraftParagraph2(data.paragraph2 || "");
      } catch (err) {
        console.error("Fetch error:", err.message, err.stack);
        setError(err.message || "Failed to load content. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async (password) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/about", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paragraph1: draftParagraph1,
          paragraph2: draftParagraph2,
          password,
        }),
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
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log("Save response:", data); // Debug log
      setDbParagraph1(draftParagraph1);
      setDbParagraph2(draftParagraph2);
      alert("✅ About content saved!");
      setShowPasswordCheck(false);
    } catch (err) {
      console.error("Save error:", err.message, err.stack);
      setError(err.message || "Failed to save content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (paragraph, password) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/about", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paragraph, password }),
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
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log("Delete response:", data); // Debug log
      if (paragraph === "paragraph1") setDbParagraph1("");
      if (paragraph === "paragraph2") setDbParagraph2("");
      alert("✅ Paragraph deleted!");
      setShowPasswordCheck(false);
    } catch (err) {
      console.error("Delete error:", err.message, err.stack);
      setError(err.message || "Failed to delete content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSuccess = (password) => {
    if (actionType === "save") {
      handleSave(password);
    } else if (actionType === "delete") {
      handleDelete(deleteParagraph, password);
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordCheck(false);
    setActionType(null);
    setDeleteParagraph(null);
    setError("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-yellow-50 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Editor Card */}
      <div className="w-full max-w-2xl mb-12">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-10 transition-all duration-300">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">
            About Page Editor
          </h2>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium animate-fade-in">
              {error}
              <button
                onClick={() => setError("")}
                className="ml-2 text-red-800 underline hover:text-red-900"
                aria-label="Dismiss error"
              >
                Dismiss
              </button>
            </div>
          )}

          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-teal-600"></div>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {/* Paragraph 1 */}
            <div>
              <label
                className="block text-lg font-semibold text-gray-800 mb-2"
                htmlFor="paragraph1"
              >
                Paragraph 1
              </label>
              <textarea
                id="paragraph1"
                value={draftParagraph1}
                onChange={(e) => setDraftParagraph1(e.target.value)}
                rows={5}
                disabled={isLoading}
                className="resize-none w-full border border-gray-300 bg-gray-50 rounded-xl p-4 text-gray-900 text-base focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm hover:shadow-md transition-all duration-200 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Write the first paragraph here..."
                aria-describedby={error ? "error-message" : undefined}
              />
            </div>

            {/* Paragraph 2 */}
            <div>
              <label
                className="block text-lg font-semibold text-gray-800 mb-2"
                htmlFor="paragraph2"
              >
                Paragraph 2
              </label>
              <textarea
                id="paragraph2"
                value={draftParagraph2}
                onChange={(e) => setDraftParagraph2(e.target.value)}
                rows={5}
                disabled={isLoading}
                className="resize-none w-full border border-gray-300 bg-gray-50 rounded-xl p-4 text-gray-900 text-base focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm hover:shadow-md transition-all duration-200 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Write the second paragraph here..."
                aria-describedby={error ? "error-message" : undefined}
              />
            </div>
          </div>

          {/* Save / Password */}
          <div className="flex justify-center pt-4 gap-4">
            {showPasswordCheck ? (
              <Password
                onSuccess={handlePasswordSuccess}
                onCancel={handlePasswordCancel}
              />
            ) : (
              <button
                type="button"
                onClick={() => {
                  setActionType("save");
                  setShowPasswordCheck(true);
                }}
                disabled={isLoading}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-12 py-3 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Display Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          { text: dbParagraph1, key: "paragraph1" },
          { text: dbParagraph2, key: "paragraph2" },
        ]
          .filter((p) => p.text)
          .map((p, i) => (
            <div
              key={i}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition-all duration-200"
            >
              <p className="text-gray-800 text-lg leading-relaxed">{p.text}</p>
              <button
                onClick={() => {
                  setActionType("delete");
                  setDeleteParagraph(p.key);
                  setShowPasswordCheck(true);
                }}
                disabled={isLoading}
                className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={`Delete ${p.key}`}
              >
                ×
              </button>
            </div>
          ))}
      </div>
    </main>
  );
}
