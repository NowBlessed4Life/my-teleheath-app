"use client";
import { useRouter } from "next/navigation";

export default function VideoConsultation() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Video Consultation</h1>

      {/* Mock Video Box */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl text-center">
        <p className="text-lg mb-4">Video Call in Progress...</p>
        <div className="w-full h-64 bg-black rounded-lg mb-4 flex items-center justify-center text-white">
          [Video Placeholder]
        </div>
        <p>Doctor: Dr. Smith</p>
        <p>Patient: You</p>
      </div>

      <button
        onClick={() => router.push("/payment")}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Proceed to Payment
      </button>
    </div>
  );
}