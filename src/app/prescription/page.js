"use client";

export default function Prescription() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-6">
      <h1 className="text-3xl font-bold mb-4">E-Prescription</h1>

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl text-center">
        <p className="text-lg mb-4">
          Congratulations! Your prescription has been sent to your preferred pharmacy.
        </p>
        <p className="text-lg">Thank you for choosing our telehealth service.</p>
      </div>
    </div>
  );
}