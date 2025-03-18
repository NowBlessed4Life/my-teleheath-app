"use client";
import { useRouter } from "next/navigation";

export default function Payment() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Payment</h1>
      <p>Amount Due: $99 (Mock Payment)</p>
      <button onClick={() => router.push("/prescription")} className="mt-4 bg-yellow-600 text-white px-6 py-3 rounded-lg">Pay & Continue</button>
    </div>
  );
}