"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useRouter } from "next/navigation";

export default function ScheduleAppointment() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());

  const handleNext = () => {
    alert(`Appointment scheduled for ${date.toDateString()}`);
    router.push("/video-consultation"); // Go to the next page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Schedule Your Appointment</h1>
      
      {/* Calendar */}
      <Calendar
        onChange={setDate}
        value={date}
        className="bg-white shadow-md p-4 rounded-lg"
      />

      {/* Selected Date */}
      <p className="mt-4 text-lg">Selected Date: <span className="font-semibold">{date.toDateString()}</span></p>

      {/* Continue Button */}
      <button
        onClick={handleNext}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Continue to Video Consultation
      </button>
    </div>
  );
}