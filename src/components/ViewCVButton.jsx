import React from "react";

const CV_LINK = "/cv.pdf"; // Points to cv.pdf in the public folder

const ViewCVButton = () => (
  <div className="fixed bottom-6 left-6 z-50 group">
    <a
      href={CV_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gradient-to-r from-[#915EFF] to-pink-500 text-white rounded-full px-4 py-3 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg font-bold cursor-pointer animate-bounce-on-hover"
      aria-label="View My CV"
      style={{ boxShadow: "0 4px 24px rgba(145,94,255,0.3)" }}
    >
      <span className="text-2xl">📄</span>
      <span className="hidden sm:inline">View CV</span>
    </a>
    {/* Tooltip */}
    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
      View My CV
    </span>
    {/* Bounce animation */}
    <style>{`
      .animate-bounce-on-hover:hover {
        animation: bounce 0.5s;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0) scale(1.05); }
        50% { transform: translateY(-8px) scale(1.12); }
      }
    `}</style>
  </div>
);

export default ViewCVButton; 