"use client";
import { useEffect, useState, useCallback } from "react";

export const Countdown = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const targetDate = new Date("2024-09-08T23:59:59").getTime();
      const secondsLeft = Math.floor((targetDate - now) / 1000);
      setCountdown(secondsLeft);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(countdown / 86400);
  const hours = Math.floor((countdown % 86400) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;
  return (
    <div className="w-full rounded-3xl bg-blue-50/30 p-10 text-center shadow-lg backdrop-blur-md">
      <h1 className="py-5 text-3xl font-bold text-blue-950 sm:text-4xl">
        Nanoparticle-based Radiopharmaceutical
      </h1>
      <p className="text-md">We are coming soon</p>
      <div className="flex flex-row items-center justify-center gap-4 px-5 py-10">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full p-2 text-blue-950 ring-2 ring-blue-950">
          <span className="text-lg font-semibold">{days}</span>
          <span className="text-xs">Days</span>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full text-blue-950 ring-2 ring-blue-950">
          <span className="text-lg font-semibold">{hours}</span>
          <span className="text-xs">Hours</span>{" "}
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full text-blue-950 ring-2 ring-blue-950">
          <span className="text-lg font-semibold">{minutes}</span>
          <span className="text-xs">Minutes</span>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full text-blue-950 ring-2 ring-blue-950">
          <span className="text-lg font-semibold">{seconds}</span>
          <span className="text-xs">Seconds</span>
        </div>
      </div>5
    </div>
  );
};
