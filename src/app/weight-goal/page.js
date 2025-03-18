"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function WeightGoal() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const router = useRouter();

  const handleSelect = (goal) => {
    setSelectedGoal(goal);
  };

  const handleContinue = () => {
    router.push("/schedule-appointment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">What’s your weight loss goal?</h2>

      <div className="mt-6 space-y-4 w-full max-w-md">
        {["Lose 1-15 lbs", "Lose 16-50 lbs", "Lose 51+ lbs", "Not sure, I just want to be healthier"].map((goal) => (
          <button
            key={goal}
            onClick={() => handleSelect(goal)}
            className={`w-full p-4 border rounded-lg text-lg text-gray-700 ${
              selectedGoal === goal ? "bg-blue-600 text-white" : "bg-white"
            } transition duration-300 hover:bg-blue-100`}
          >
            {goal}
          </button>
        ))}
      </div>

      {/* Continue Button */}
      {selectedGoal && (
        <button
          onClick={handleContinue}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Continue
        </button>
      )}
    </div>
  );
}
