"use client";
import { useRouter } from "next/navigation";

export default function VideoConsultation() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Video Consultation</h1>
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p>Video Call in Progress... (This is a Mock)</p>
      </div>
      <button onClick={() => router.push("/payment")} className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg">Proceed to Payment</button>
    </div>
  );
}