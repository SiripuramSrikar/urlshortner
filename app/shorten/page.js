"use client";
import Link from "next/link";
import React, { useState } from "react";

const shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [message, setMessage] = useState("");

  const generate = async () => {
    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await response.json();
      if (response.ok) {
        setGenerated(`${window.location.origin}/${shorturl}`);
        setUrl("");
        setShortUrl("");
        setMessage(result.message || "Short URL created successfully!");
      } else {
        setMessage(result.error || "Failed to create short URL");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          value={shorturl}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your preferred short URL text (optional)"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white"
        >
          Generate
        </button>
      </div>

      {message && <p className="text-sm text-gray-600">{message}</p>}

      {generated && (
        <>
          <span className="font-bold text-lg">Your Link:</span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default shorten;
