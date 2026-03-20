"use client";

export default function SectionDivider() {
  return (
    <div className="flex justify-center">
      <div className="relative h-px w-1/2 max-w-md overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#00ffdc] to-transparent animate-divider-glow" />
        <style jsx>{`
          @keyframes divider-glow {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-divider-glow {
            animation: divider-glow 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
