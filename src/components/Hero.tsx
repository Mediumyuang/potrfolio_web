"use client";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden overflow-x-hidden px-2 sm:px-4 md:px-6 lg:px-8" data-aos="fade-up">
      {/* Neon blurred circles */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-gradient-radial from-fuchsia-700/30 via-purple-800/30 to-transparent opacity-40 blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-gradient-radial from-blue-800/30 via-cyan-700/30 to-transparent opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] bg-gradient-radial from-purple-900/30 via-fuchsia-800/30 to-transparent opacity-20 blur-2xl" style={{ transform: 'translate(-50%,-50%)' }} />
      {/* Main content */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-md text-center px-4 sm:px-6 md:px-8">
        I create websites that bring clients
      </h1>
      <div className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-semibold mt-3 sm:mt-4 md:mt-6 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 min-h-[36px] sm:min-h-[32px] md:min-h-[48px] drop-shadow-lg animate-float-shadow px-4 sm:px-6 md:px-8">
        <span className="text-white">We create</span>
        <span className="relative bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent animate-gradient-x px-2 italic">
          <Typewriter
            words={["Success", "Sales", "Impressions"]}
            loop={0}
            cursor
            cursorStyle={<span className='typewriter-cursor'>|</span>}
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </span>
      </div>
      <div className="mt-8 sm:mt-12">
        <button
          className="order-website-animated-btn"
          onClick={() => {
            const el = document.getElementById('contact-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Order a website
          <div className="star-1">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53">
              <g>
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53">
              <g>
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-3">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53">
              <g>
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-4">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53">
              <g>
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-5">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53">
              <g>
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-6">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53">
              <g>
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
        </button>
      </div>
      <style jsx global>{`
        .typewriter-cursor {
          display: inline-block;
          width: 1ch;
          color: #fff;
          background: linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa);
          border-radius: 2px;
          margin-left: 2px;
          animation: blink 1s steps(1) infinite;
        }
        @media (max-width: 640px) {
          .typewriter-cursor {
            width: 1.5ch;
            font-size: 1.4em;
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float-shadow {
          0%, 100% { filter: drop-shadow(0 2px 12px rgba(80,80,255,0.18)); transform: translateY(0); }
          50% { filter: drop-shadow(0 8px 24px rgba(80,80,255,0.32)); transform: translateY(-6px); }
        }
        .animate-float-shadow {
          animation: float-shadow 3.5s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        .drop-shadow-md {
          filter: drop-shadow(0 2px 8px rgba(80,80,120,0.12));
        }
        .gradient-title-shadow {
          text-shadow: 0 2px 12px rgba(80,80,120,0.10);
        }
        .order-website-animated-btn {
          position: relative;
          padding: 12px 35px;
          background: linear-gradient(to right, #f472b6, #f9a8d4);
          font-size: 17px;
          font-weight: 500;
          color: #181818;
          border: 3px solid #fec195;
          border-radius: 8px;
          box-shadow: 0 0 0 #fec1958c;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
        .order-website-animated-btn .star-1,
        .order-website-animated-btn .star-2,
        .order-website-animated-btn .star-3,
        .order-website-animated-btn .star-4,
        .order-website-animated-btn .star-5,
        .order-website-animated-btn .star-6 {
          position: absolute;
          width: 15px;
          height: 15px;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
        }
        .order-website-animated-btn .star-1 { top: 20%; left: 20%; width: 25px; }
        .order-website-animated-btn .star-2 { top: 45%; left: 45%; width: 15px; }
        .order-website-animated-btn .star-3 { top: 40%; left: 40%; width: 5px; }
        .order-website-animated-btn .star-4 { top: 20%; left: 40%; width: 8px; }
        .order-website-animated-btn .star-5 { top: 25%; left: 45%; width: 15px; }
        .order-website-animated-btn .star-6 { top: 5%; left: 50%; width: 5px; }
        .order-website-animated-btn:hover {
          background: transparent;
          color: #fec195;
          box-shadow: 0 0 25px #fec1958c;
        }
        .order-website-animated-btn:hover .star-1 { top: -80%; left: -30%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
        .order-website-animated-btn:hover .star-2 { top: -25%; left: 10%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
        .order-website-animated-btn:hover .star-3 { top: 55%; left: 25%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
        .order-website-animated-btn:hover .star-4 { top: 30%; left: 80%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
        .order-website-animated-btn:hover .star-5 { top: 25%; left: 115%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
        .order-website-animated-btn:hover .star-6 { top: 5%; left: 60%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
        .order-website-animated-btn .fil0 { fill: #fffdef; }
      `}</style>
    </div>
  );
}

/* globals.css: добавить анимацию градиента */
/*
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease-in-out infinite;
}
*/ 