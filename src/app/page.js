"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", symptoms: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-blue-700">Healthcare Platform</h1>
        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-4 hover:bg-blue-700">
            Sign In
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center text-white mt-12">
        <h2 className="text-4xl font-bold">Access Quality Healthcare Online</h2>
        <p className="mt-4 text-lg">Talk to a doctor, or nurse practitioner anytime, anywhere.</p>
      </div>

      {/* Appointment Form */}
      <div className="w-full max-w-lg bg-white p-8 mt-8 shadow-lg rounded-xl">
        <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">Book an Appointment</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="symptoms"
              placeholder="Describe your symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-center text-green-600 font-bold">
            Thank you! A doctor will contact you soon.
          </p>
        )}
      </div>
    </div>
  );
}