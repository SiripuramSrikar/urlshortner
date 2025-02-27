"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
      {submitted ? (
        <p className="text-lg text-green-600">Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label className="text-lg">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />

          <label className="text-lg">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />

          <label className="text-lg">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded h-24"
            required
          />

          <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
