"use client";
import { useRouter } from "next/navigation";

export default function Payment() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Payment</h1>

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl text-center">
        <p className="text-lg mb-4">Amount Due: <strong>$99</strong></p>
        <p>This is a mock payment screen.</p>
        <button
          onClick={() => router.push("/prescription")}
          className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700"
        >
          Pay & Get Prescription
        </button>
      </div>
    </div>
  );
}