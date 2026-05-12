"use client";

import React from "react";

export default function VoiceBars() {
  const heights = [
   42, 26, 55, 30, 65, 22, 48, 70, 34,
    20, 58, 28, 62, 38, 72, 24, 50, 66, 32,  
    18, 42, 26, 55, 30, 65, 22, 48, 70, 34,
    
  ];

  return (
    <div className="relative w-full overflow-hidden border-0">
      {/* Moving Wave */}
      <div className="flex items-center gap-[10px] w-max animate-slide">
        {[...heights, ...heights,...heights, ...heights, ...heights, ...heights,...heights, ...heights].map((height, i) => (
          <div
            key={i}
            className="wave-bar"
            style={{
              height: `${height}px`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .wave-bar {
          width: 4px;
          border-radius: 999px;
          background:white;
          animation: bounce 1.1s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(213, 117, 58, 0.5);
        }

        @keyframes bounce {
          0%,
          100% {
            transform: scaleY(0.2);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(0.9);
            opacity: 1;
          }
        }

        @keyframes slide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.33%);
          }
        }

        .animate-slide {
          animation: slide 8s linear infinite;
        }

        @media (max-width: 768px) {
          .wave-bar {
            width: 3px;
          }
        }
      `}</style>
    </div>
  );
}