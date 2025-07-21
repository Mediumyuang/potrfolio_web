import React from "react";

// Очень subtle SVG-неоновые линии с анимацией
const NeonLinesOverlay: React.FC = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full pointer-events-none select-none"
    style={{ opacity: 0.12 }}
  >
    <defs>
      <linearGradient id="blue-pink" x1="0" y1="0" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6D5BFF" />
        <stop offset="1" stopColor="#FF5BC8" />
      </linearGradient>
      <linearGradient id="purple-cyan" x1="1920" y1="0" x2="0" y2="1080" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A259FF" />
        <stop offset="1" stopColor="#00CFFF" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Первая линия */}
    <path
      d="M 0 200 Q 600 100 1920 300"
      stroke="url(#blue-pink)"
      strokeWidth="8"
      filter="url(#glow)"
      opacity="0.7"
    >
      <animate attributeName="d" dur="12s" repeatCount="indefinite"
        values="M 0 200 Q 600 100 1920 300; M 0 220 Q 700 180 1920 320; M 0 200 Q 600 100 1920 300" />
    </path>
    {/* Вторая линия */}
    <path
      d="M 0 800 Q 1200 1000 1920 900"
      stroke="url(#purple-cyan)"
      strokeWidth="10"
      filter="url(#glow)"
      opacity="0.5"
    >
      <animate attributeName="d" dur="16s" repeatCount="indefinite"
        values="M 0 800 Q 1200 1000 1920 900; M 0 820 Q 1000 900 1920 920; M 0 800 Q 1200 1000 1920 900" />
    </path>
    {/* Третий блик */}
    <ellipse
      cx="1600"
      cy="200"
      rx="120"
      ry="40"
      fill="url(#blue-pink)"
      filter="url(#glow)"
      opacity="0.3"
    >
      <animate attributeName="rx" values="120;160;120" dur="10s" repeatCount="indefinite" />
      <animate attributeName="ry" values="40;60;40" dur="10s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

export default NeonLinesOverlay; 