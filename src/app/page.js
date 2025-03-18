"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", weightGoal: "", healthConcerns: "" });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter(); // ✅ Initialize router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleContinue = () => {
    router.push("/weight-goal"); // ✅ Redirect to weight loss goal page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center p-6">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-blue-700">WeightCare Platform</h1>
        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-4 hover:bg-blue-700">Sign In</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center text-white mt-12">
        <h2 className="text-4xl font-bold">Take the First Step Towards a Healthier You</h2>
        <p className="mt-4 text-lg">Discover personalized plans tailored to your goals, lifestyle, and health history.</p>
      </div>

      {/* Consultation Form */}
      <div className="w-full max-w-lg bg-white p-8 mt-8 shadow-lg rounded-xl">
        <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">Start Your Consultation</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="text" name="weightGoal" placeholder="Your Weight Loss Goal" value={formData.weightGoal} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea name="healthConcerns" placeholder="Any Health Concerns?" value={formData.healthConcerns} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Submit</button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-bold">Thanks! A healthcare expert will contact you soon.</p>
            <button onClick={handleContinue} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mt-4">Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}