'use client';


import { FaRobot, FaCoffee, FaBuilding } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <section className="relative bg-transparent w-full px-2 sm:px-4 md:px-6 overflow-x-hidden" data-aos="fade-right">
      {/* Neon blurred circles */}
      <div className="absolute -top-24 left-1/3 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-gradient-radial from-fuchsia-600/20 via-purple-700/20 to-transparent opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] bg-gradient-radial from-blue-700/20 via-cyan-500/20 to-transparent opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[120px] h-[120px] sm:w-[300px] sm:h-[300px] bg-gradient-radial from-purple-900/20 via-fuchsia-800/20 to-transparent opacity-10 blur-2xl pointer-events-none" style={{ transform: 'translate(-50%,-50%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-20 px-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x px-2">My Work Examples</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 w-full">
          {/* Project 1: Business Website */}
          <div className="container" onClick={() => window.open('https://www.automateai.dev/', '_blank')} style={{ cursor: 'pointer' }}>
            <div className="canvas">
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`tracker tr-${i + 1}`}></div>
              ))}
            </div>
            <div id="card">
              <div className="card-content">
                <div className="glowing-elements">
                  <div className="glow-1"></div>
                  <div className="glow-2"></div>
                  <div className="glow-3"></div>
                </div>
                <div className="card-particles">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="corner-elements">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className="scan-line"></div>
                <div className="card-icon"><FaRobot style={{ color: '#e0e7ff', fontSize: '1.5em', filter: 'drop-shadow(0 0 4px rgba(224, 231, 255, 0.3))' }} /></div>
                <div id="prompt">Click to view</div>
                <div className="title">Business Website</div>
                <div className="subtitle">Save Time, Scale with n8n</div>
              </div>
            </div>
          </div>
          {/* Project 2: Coffee Shop */}
          <div className="container" onClick={() => window.open('https://caffe-shop-seven.vercel.app/', '_blank')} style={{ cursor: 'pointer' }}>
            <div className="canvas">
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`tracker tr-${i + 1}`}></div>
              ))}
            </div>
            <div id="card">
              <div className="card-content">
                <div className="glowing-elements">
                  <div className="glow-1"></div>
                  <div className="glow-2"></div>
                  <div className="glow-3"></div>
                </div>
                <div className="card-particles">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="corner-elements">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className="scan-line"></div>
                <div className="card-icon"><FaCoffee style={{ color: '#e0e7ff', fontSize: '1.5em', filter: 'drop-shadow(0 0 4px rgba(224, 231, 255, 0.3))' }} /></div>
                <div id="prompt">Click to view</div>
                <div className="title">Coffee Shop</div>
                <div className="subtitle">Website in 5 Hours for 99$</div>
              </div>
            </div>
          </div>
          {/* Project 3: Property Agency */}
          <div className="container" onClick={() => window.open('joyful-semolina-df7a6b.netlify.app', '_blank')} style={{ cursor: 'pointer' }}>
            <div className="canvas">
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`tracker tr-${i + 1}`}></div>
              ))}
            </div>
            <div id="card">
              <div className="card-content">
                <div className="glowing-elements">
                  <div className="glow-1"></div>
                  <div className="glow-2"></div>
                  <div className="glow-3"></div>
                </div>
                <div className="card-particles">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="corner-elements">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className="scan-line"></div>
                <div className="card-icon"><FaBuilding style={{ color: '#e0e7ff', fontSize: '1.5em', filter: 'drop-shadow(0 0 4px rgba(224, 231, 255, 0.3))' }} /></div>
                <div id="prompt">Click to view</div>
                <div className="title">Property Agency</div>
                <div className="subtitle">Multi-page website completed within a day</div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>{`
/* Вставьте сюда CSS из вашего примера Uiverse.io by 00Kubi */
.container {
  position: relative;
  width: 100%;
  min-width: 280px;
  max-width: 420px;
  height: 250px;
  transition: 200ms;
  margin: 0.5rem;
  flex: 0 1 auto;
  display: flex;
  align-items: stretch;
  justify-self: center;
}
@media (max-width: 640px) {
  .container {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
    height: 200px;
    margin: 0.5rem auto;
    width: calc(100vw - 2rem);
  }
}
.container:active {
  width: 98%;
  height: 260px;
}
#card {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 700ms;
  background: linear-gradient(45deg, #1a1a1a, #262626);
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow:
    0 0 20px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  min-width: 0;
  min-height: 0;
}
.card-content {
  position: relative;
  width: 100%;
  height: 100%;
}
#prompt {
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 20;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  transition: 300ms ease-in-out;
  position: absolute;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
@media (max-width: 640px) {
  #prompt {
    bottom: 50%;
    transform: translate(-50%, 50%);
    font-size: 14px;
    margin-top: 30px;
  }
}
.card-icon {
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 20;
  font-size: 32px;
  transition: 300ms ease-in-out;
  position: absolute;
  text-align: center;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
  margin-bottom: 40px;
}
@media (max-width: 640px) {
  .card-icon {
    bottom: 50%;
    transform: translate(-50%, 50%);
    font-size: 28px;
    margin-bottom: 30px;
  }
}
.title {
  opacity: 0;
  transition: 300ms ease-in-out;
  position: absolute;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 4px;
  text-align: center;
  width: 100%;
  padding-top: 20px;
  background: linear-gradient(45deg, #00ffaa, #00a2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
  text-shadow:
    0 0 10px rgba(92, 103, 255, 0.5),
    0 0 20px rgba(92, 103, 255, 0.3);
}
.subtitle {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  letter-spacing: 2px;
  transform: translateY(30px);
  color: rgba(255, 255, 255, 0.6);
}
.highlight {
  color: #00ffaa;
  margin-left: 5px;
  background: linear-gradient(90deg, #5c67ff, #ad51ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.glowing-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.glow-1,
.glow-2,
.glow-3 {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 170, 0.3) 0%,
    rgba(0, 255, 170, 0) 70%
  );
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.glow-1 {
  top: -20px;
  left: -20px;
}
.glow-2 {
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
}
.glow-3 {
  bottom: -20px;
  left: 30%;
}
.card-particles span {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #00ffaa;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-particles span:nth-child(1) {
  --x: 1;
  --y: -1;
  top: 40%;
  left: 20%;
}
.card-particles span:nth-child(2) {
  --x: -1;
  --y: -1;
  top: 60%;
  right: 20%;
}
.card-particles span:nth-child(3) {
  --x: 0.5;
  --y: 1;
  top: 20%;
  left: 40%;
}
.card-particles span:nth-child(4) {
  --x: -0.5;
  --y: 1;
  top: 80%;
  right: 40%;
}
.card-particles span:nth-child(5) {
  --x: 1;
  --y: 0.5;
  top: 30%;
  left: 60%;
}
.card-particles span:nth-child(6) {
  --x: -1;
  --y: 0.5;
  top: 70%;
  right: 60%;
}
#card::before {
  content: "";
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 170, 0.1) 0%,
    rgba(0, 162, 255, 0.05) 50%,
    transparent 100%
  );
  filter: blur(20px);
  opacity: 0;
  width: 150%;
  height: 150%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}
.tracker:hover ~ #card .title {
  opacity: 1;
  transform: translateY(-10px);
}
.tracker:hover ~ #card .glowing-elements div {
  opacity: 1;
}
.tracker:hover ~ #card .card-particles span {
  animation: particleFloat 2s infinite;
}
@keyframes particleFloat {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
    opacity: 0;
  }
}
.tracker:hover ~ #card::before {
  opacity: 1;
}
.tracker {
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
}
.tracker:hover {
  cursor: pointer;
}
.tracker:hover ~ #card #prompt {
  opacity: 0;
}
.tracker:hover ~ #card {
  transition: 300ms;
  filter: brightness(1.1);
}
.container:hover #card::before {
  transition: 200ms;
  content: "";
  opacity: 80%;
}
.canvas {
  perspective: 800px;
  inset: 0;
  z-index: 200;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "tr-1 tr-2 tr-3 tr-4 tr-5"
    "tr-6 tr-7 tr-8 tr-9 tr-10"
    "tr-11 tr-12 tr-13 tr-14 tr-15"
    "tr-16 tr-17 tr-18 tr-19 tr-20"
    "tr-21 tr-22 tr-23 tr-24 tr-25";
}
.tr-1 { grid-area: tr-1; }
.tr-2 { grid-area: tr-2; }
.tr-3 { grid-area: tr-3; }
.tr-4 { grid-area: tr-4; }
.tr-5 { grid-area: tr-5; }
.tr-6 { grid-area: tr-6; }
.tr-7 { grid-area: tr-7; }
.tr-8 { grid-area: tr-8; }
.tr-9 { grid-area: tr-9; }
.tr-10 { grid-area: tr-10; }
.tr-11 { grid-area: tr-11; }
.tr-12 { grid-area: tr-12; }
.tr-13 { grid-area: tr-13; }
.tr-14 { grid-area: tr-14; }
.tr-15 { grid-area: tr-15; }
.tr-16 { grid-area: tr-16; }
.tr-17 { grid-area: tr-17; }
.tr-18 { grid-area: tr-18; }
.tr-19 { grid-area: tr-19; }
.tr-20 { grid-area: tr-20; }
.tr-21 { grid-area: tr-21; }
.tr-22 { grid-area: tr-22; }
.tr-23 { grid-area: tr-23; }
.tr-24 { grid-area: tr-24; }
.tr-25 { grid-area: tr-25; }
.tr-1:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg); }
.tr-2:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg); }
.tr-3:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg); }
.tr-4:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg); }
.tr-5:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg); }
.tr-6:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg); }
.tr-7:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg); }
.tr-8:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg); }
.tr-9:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg); }
.tr-10:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg); }
.tr-11:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg); }
.tr-12:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg); }
.tr-13:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
.tr-14:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg); }
.tr-15:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg); }
.tr-16:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg); }
.tr-17:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg); }
.tr-18:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg); }
.tr-19:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg); }
.tr-20:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg); }
.tr-21:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg); }
.tr-22:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg); }
.tr-23:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg); }
.tr-24:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg); }
.tr-25:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg); }
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.card-glare {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.05) 45%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  transition: opacity 300ms;
}
.cyber-lines span {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(92, 103, 255, 0.2),
    transparent
  );
}
.cyber-lines span:nth-child(1) {
  top: 20%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: left;
  animation: lineGrow 3s linear infinite;
}
.cyber-lines span:nth-child(2) {
  top: 40%;
  right: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right;
  animation: lineGrow 3s linear infinite 1s;
}
.cyber-lines span:nth-child(3) {
  top: 60%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: left;
  animation: lineGrow 3s linear infinite 2s;
}
.cyber-lines span:nth-child(4) {
  top: 80%;
  right: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right;
  animation: lineGrow 3s linear infinite 1.5s;
}
.corner-elements span {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(92, 103, 255, 0.3);
}
.corner-elements span:nth-child(1) {
  top: 10px;
  left: 10px;
  border-right: 0;
  border-bottom: 0;
}
.corner-elements span:nth-child(2) {
  top: 10px;
  right: 10px;
  border-left: 0;
  border-bottom: 0;
}
.corner-elements span:nth-child(3) {
  bottom: 10px;
  left: 10px;
  border-right: 0;
  border-top: 0;
}
.corner-elements span:nth-child(4) {
  bottom: 10px;
  right: 10px;
  border-left: 0;
  border-top: 0;
}
.scan-line {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(92, 103, 255, 0.1),
    transparent
  );
  transform: translateY(-100%);
  animation: scanMove 2s linear infinite;
}
@keyframes lineGrow {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
@keyframes scanMove {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
#card:hover .card-glare {
  opacity: 1;
}
.corner-elements span {
  transition: all 0.3s ease;
}
#card:hover .corner-elements span {
  border-color: rgba(92, 103, 255, 0.8);
  box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
}
.tracker:hover ~ #card .card-icon {
  transform: translateX(-50%) scale(1.1);
  filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
}
.tracker:hover ~ #card .card-icon svg {
  filter: drop-shadow(0 0 6px rgba(224, 231, 255, 0.5));
}
`}</style>
      </div>
    </section>
  );
} 