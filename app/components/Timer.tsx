"use client";
import { useEffect, useState } from "react";
const FlipUnit = ({ digit }: { digit: string }) => (
  <div className="relative bg-black text-white w-[101px] h-[152px] rounded-lg shadow-md 
  flex items-center justify-center text-8xl font-bold font-mono">
    <span>{digit}</span>
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-700"></div>
  </div>
);

const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31T23:59:59") - +new Date();
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const hours = formatNumber(timeLeft.hours);
  const minutes = formatNumber(timeLeft.minutes);
  const seconds = formatNumber(timeLeft.seconds);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white">
      <div className="flex items-center gap-4">
        {/* Hours */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <FlipUnit digit={hours[0]} />
            <FlipUnit digit={hours[1]} />
          </div>
          <span className="text-gray-600 font-semibold">Hours</span>
        </div>

        <span className="text-5xl font-bold pb-8">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <FlipUnit digit={minutes[0]} />
            <FlipUnit digit={minutes[1]} />
          </div>
          <span className="text-gray-600 font-semibold">Minutes</span>
        </div>

        <span className="text-5xl font-bold pb-8">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <FlipUnit digit={seconds[0]} />
            <FlipUnit digit={seconds[1]} />
          </div>
          <span className="text-gray-600 font-semibold">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
