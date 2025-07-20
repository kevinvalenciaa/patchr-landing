"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [displayTime, setDisplayTime] = useState("12:00 PM");

  const startTime = 9; // 9 AM
  const totalHours = 12; // 9 AM to 9 PM

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };
  const springX = useSpring(x, springConfig);
  
  const timeInMinutes = useTransform(x, (latestX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 0;
    const percentage = latestX / rect.width;
    return percentage * totalHours * 60;
  });

  useEffect(() => {
    const unsubscribe = timeInMinutes.onChange((latestMinutes) => {
      const hours = startTime + Math.floor(latestMinutes / 60);
      const minutes = Math.floor(latestMinutes % 60);
      
      const period = hours >= 12 && hours < 24 ? "PM" : "AM";
      const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
      const displayMinutes = minutes.toString().padStart(2, '0');
      
      setDisplayTime(`${displayHour}:${displayMinutes} ${period}`);
    });
    return unsubscribe;
  }, [timeInMinutes, startTime]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // Set initial position to the middle (e.g., 3 PM)
      x.set(rect.width / 2);
    }
  }, [x]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      x.set(mouseX);
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // Snap back to the center
      x.set(rect.width / 2);
    }
  };
  
  const times = ["9am", "12pm", "3pm", "6pm", "9pm"];
  const itemStyle = "text-sm font-medium rounded-xl px-4 py-1.5 text-center truncate h-8 flex items-center justify-center";

  return (
    <div className="w-full h-full p-4 pt-6 rounded-lg overflow-hidden">
      {/* Time Headers */}
      <div className="relative h-5 mb-2">
        {times.map((time, i) => (
          <div
            key={time}
            className="absolute top-0 text-sm text-gray-400 font-medium"
            style={{
              left: `${(i / (times.length - 1)) * 100}%`,
              transform:
                i === 0
                  ? "translateX(0%)"
                  : i === times.length - 1
                  ? "translateX(-100%)"
                  : "translateX(-50%)",
            }}
          >
            {time}
          </div>
        ))}
      </div>

      {/* Timeline Grid */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative mt-2 h-[180px]" // Fixed height container
      >
        {/* Vertical Dashed Lines */}
        <div className="absolute inset-0 grid grid-cols-4">
          {times.slice(0, -1).map((_, i) => (
            <div key={i} className={`${i > 0 ? 'border-l border-dashed border-gray-300' : ''}`}></div>
          ))}
        </div>

        {/* Timeline Items - positions based on a 12-hour workday (9am-9pm) */}
        <div className="relative pt-8 space-y-3">
          {/* Item 1: 11am - 2pm (3 hours). Starts 2/12th of the way in. Width is 3/12. */}
          <div
            className={`relative ml-[16.66%] w-[25%] border border-blue-300 bg-blue-100 text-blue-800 ${itemStyle}`}
          >
            AC Repair
          </div>
          {/* Item 2: 1:30pm - 5:30pm (4 hours). Starts 4.5/12th of the way in. Width is 4/12. */}
          <div
            className={`relative ml-[37.5%] w-[33.33%] border border-green-300 bg-green-100 text-green-800 ${itemStyle}`}
          >
            Furnace Installation
          </div>
        </div>

        {/* Vertical Follow Line */}
        <motion.div
          className="absolute top-0 h-full w-0.5"
          style={{ 
            left: springX,
          }}
        >
          {/* Line itself */}
          <div className="relative h-full w-full bg-gray-700">
            {/* Time Indicator */}
            <div className="absolute top-0 -translate-y-[120%] -translate-x-1/2">
              <div className="relative">
                {/* little line on top of the box */}
                <div className="absolute bottom-[calc(100%-2px)] left-1/2 w-0.5 h-2 bg-gray-700"></div>
                <div className="bg-black text-white text-xs font-semibold rounded-md px-2 py-1 whitespace-nowrap">
                  {displayTime}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline; 